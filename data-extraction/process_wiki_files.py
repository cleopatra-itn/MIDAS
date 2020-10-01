import os
import getopt
import sys
import json
import heapq
from spacy.lang.en import English
from bs4 import BeautifulSoup
import pickle
from pathlib import Path
import urllib
import re

def convert_xml_iob(line, dbpedia_uner_mapping):
	ENT = set(dbpedia_uner_mapping.values())
	ENT.remove('')
	ne_type_re = re.compile(r'<ne type="([^"]*)">', re.U)
	markup_split_re = re.compile(r'(<[^>]*>)|(\s+)', re.U)

	line = line.strip()
	new_line = u""
	inside = 0
	markup = "O"
	for k, token in enumerate(markup_split_re.split(line)):
		if not token or not token.strip():
			continue
		ne_type = ne_type_re.findall(token)
		if ne_type:
			inside += 1
			if inside== 1:
				if ne_type[0] in ENT:
					markup = ne_type[0]
				else:
					markup = "O"
		elif token == "</ne>":
			inside -= 1
			if inside == 0:
				markup = "O"				
		elif not token.startswith("<") or not token.endswith(">"):
			new_line += u"{}\t{}\n".format(token, markup)
	return new_line

def process_wiki_files(wiki_folder_path, wiki_file_path, wiki_entities_dbpedia_class, dbpedia_uner_mapping, output_path):
	nlp = English()
	sentencizer = nlp.create_pipe("sentencizer")
	nlp.add_pipe(sentencizer)
	
	outputs =[]
	counter_matching= 0
	with open(os.path.join(wiki_folder_path, wiki_file_path)) as input_file:
		for paragraph in input_file:
			# we get paragraph by iterating through the files
			paragraph = paragraph.strip()
			lines = [sent.text for sent in (nlp(paragraph).sents)]
			for line in lines:
				line = line.strip()
				# keep track if there are entities in the line
				any_entities_found=False
				if line :
					soup = BeautifulSoup(line,"lxml")

					for span in soup.select('a[href]'):
						sup = soup.new_tag('ne')
						sup.string = span.text
						# this is the key from wikipedia/dbpedia that will be lookedup in the UNER 
						uner_lookup_key = urllib.parse.unquote(span.attrs['href'])
						if  uner_lookup_key in wiki_entities_dbpedia_class and wiki_entities_dbpedia_class[uner_lookup_key] :
							any_entities_found=True
							sup.attrs["type"] = wiki_entities_dbpedia_class[uner_lookup_key][0][1]
						
							span.insert_after(sup)
							span.clear()
							# replace the span tag with it's contents
							span.unwrap()

					if soup.body:
						soup = "".join([str(x) for x in soup.body])
						# to keep the bs code platform independent we use the default parser which adds extra p tags to some of the sentences
						if "<p>" == soup[:3]:
							soup = soup[3:-4]
						if any_entities_found:
							counter_matching = counter_matching+1
							outputs.append(convert_xml_iob(soup, dbpedia_uner_mapping))
	if outputs:
		if not os.path.exists(os.path.join(output_path,str(Path(wiki_file_path).parent))):
			os.mkdir(os.path.join(output_path,str(Path(wiki_file_path).parent)))  
		with open(os.path.join(output_path,wiki_file_path) + '.txt',"w") as output_file:
			tokenized_list = []
			for output in outputs:
				output_file.write(output)
				output_file.write("\n")
				token_str = output.split("\n")
				tokenized_list.append([token.split() for token in token_str])
			with open(os.path.join(output_path,wiki_file_path)+'.pkl', 'wb') as f:
				pickle.dump(tokenized_list, f)


def main(argv):
	script_dir = os.path.dirname(__file__)
	unerpath = ''
	wikipath = ''
	inputfile = ''
	outputfolder = ''
	try:
		opts, args = getopt.getopt(argv,"hi:o",["ifile=","ofile=","unerpath=","wikipath="])
	except getopt.GetoptError:
		print('process_wiki_files.py -i <inputfile> -o <outputfolder> --unerpath <unerpath> --wikipath <wikipath>')
		sys.exit(2)
	for opt, arg in opts:
		if opt == '-h':
			print('process_wiki_files.py -i <inputfile> -o <outputfolder> --unerpath <unerpath> --wikipath <wikipath>')
			sys.exit()
		elif opt in ("-i", "--ifile"):
			inputfile = arg
		elif opt in ("-o", "--ofile"):
			outputfolder = arg
		elif opt in ("--unerpath"):
			unerpath = arg
		elif opt in ("--wikipath"):
			wikipath = arg
	if outputfolder == '':
		outputfolder = 'process_wiki_files_output'
	
	if not os.path.exists(script_dir + outputfolder):
		os.mkdir(script_dir + outputfolder)

	if wikipath == '':
		wikipath = script_dir + 'wiki'
	if unerpath == '':
		unerpath = script_dir + 'uner'

	# LOAD UNER DATA

	with open(script_dir + unerpath+'/dbpedia_uner_mapping.json') as f:
		dbpedia_uner_mapping = json.load(f)

	with open(script_dir + unerpath+ '/dbpedia_hierarchy_priority.json') as f:
		dbpedia_hierarchy_priority = json.load(f)

	# read the sample file having entities and the candidate classes

	# Define a mapping of wikititle with its UNER class
	wiki_entities_dbpedia_class = {}

	with open(script_dir + inputfile) as input_file:
		for index, line in enumerate(input_file):
			line = line.strip()
			if line:
				wiki_title, *classes = line.split(",")
				priority_queue = []
				priority_set = set()
				# proces the classes
				for c in classes:
					# take the last part of the url => usually entity is found as last
					class_name = (c.split("/")[-1])
					# check if the class in dbpedia and if it is check its corresponding mapping exists, 
					# it could be blank and we ignore the blank classes
					if class_name in dbpedia_uner_mapping and dbpedia_uner_mapping[class_name]:
						#check if the class has heirachy
						if class_name in dbpedia_hierarchy_priority:
						# make sure whatever you are adding doesnt affect the possible selection hence uniques are added
							if class_name not in priority_set:
								# push it into queue with its priority
								heapq.heappush(priority_queue, (dbpedia_hierarchy_priority[class_name], dbpedia_uner_mapping[class_name]))
								priority_set.add(dbpedia_uner_mapping[class_name])

				wiki_entities_dbpedia_class[wiki_title] = heapq.nlargest(1,priority_queue)

	# Annotate wikipedia articles



	wiki_files_to_be_processed =[]
	# list all the folders containing wikipedia processed files 
	wiki_dirs = [name for name in os.listdir(wikipath) if os.path.isdir(os.path.join(wikipath, name)) ]
	# for each folder
	for wiki_dir in wiki_dirs:
		full_folder_path = os.path.join(wikipath,wiki_dir)
		for wiki_file in os.listdir(full_folder_path):
			wiki_files_to_be_processed.append(os.path.join(wiki_dir,wiki_file))


	for doc_path in wiki_files_to_be_processed:
		process_wiki_files(wikipath, doc_path, wiki_entities_dbpedia_class, dbpedia_uner_mapping, script_dir + outputfolder)



if __name__ == "__main__":
	main(sys.argv[1:])
	class config:
		OUTPUT_PATH = "process_wiki_files_output"

	### How many sentences do we have ?
	some_tokens = []
	lines =0
	wiki_dirs = [name for name in os.listdir(config.OUTPUT_PATH) if os.path.isdir(os.path.join(config.OUTPUT_PATH, name)) ]
	# for each folder
	for wiki_dir in wiki_dirs:
	    full_folder_path = os.path.join(config.OUTPUT_PATH,wiki_dir)
	    for wiki_file in os.listdir(full_folder_path):
	        if not wiki_file.endswith(".pkl"):
	            #load the file
	            with open(os.path.join(full_folder_path,wiki_file.strip(".txt"))+'.pkl', "rb") as fp:   # Unpickling
	                b = pickle.load(fp)
	                for i in b:
	                    lines +=1
	                    for j in i:
	                        if len(j)>1:
	                            some_tokens.append(j[1])

	count_file=open("Entities_Statistics","w")
	count_file.write("Number of sentences in corpus: " + str(lines) + "\n\n")
	count_file.write("Number of sentences in corpus: " + str(len(some_tokens)) + "\n\n")
	cnt = Counter(some_tokens)
	count_file.write("Number of entities per Named-Entity class:\n")

	for i in cnt.items():
	    count_file.write(i[0] + "\t" + str(i[1]) + "\n")