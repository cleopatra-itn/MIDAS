import os 
import json
import sys
import getopt
import codecs

def main(argv):
	script_dir = os.path.dirname(__file__)
	inputfile = ''
	outputfile = ''
	try:
		opts, args = getopt.getopt(argv,"hi:o:b:",["ifile=","ofile=", "blanks="])
	except getopt.GetoptError:
		print('class_extract_dbpedia.py -i <inputfile> -o <outputfile> -b <blanks>')
		sys.exit(2)
	for opt, arg in opts:
		if opt == '-h':
			print('class_extract_dbpedia.py -i <inputfile> -o <outputfile> -b <blanks>')
			sys.exit()
		elif opt in ("-i", "--ifile"):
			inputfile = arg
		elif opt in ("-o", "--ofile"):
			outputfile = arg
		elif opt in ("-b", "--blanks"):
			blanksfile = arg
	if outputfile == '':
		outputfile = 'class_extract_dbpedia_output.txt'
	if blanksfile == '':
		blanksfile = 'class_extract_dbpedia_blanks.txt'

	with open(script_dir + inputfile, 'r') as f, codecs.open(script_dir + outputfile, "w","UTF-8") as outputfile, codecs.open(script_dir + blanksfile,"w","UTF-8") as blankfile:
		for index, line in enumerate(f):
			try:
				data_item = json.loads(line)
			except json.decoder.JSONDecodeError:
				print(line)
				print("")
				print(input("enter"))
				data_item = json.loads(line[:-1])
				print(input("enter"))
				import IPython; IPython.embed(); exit(1)

			bindings = data_item['results']['bindings']
			candidate_classes =[]
			entity_name = ''
			for binding in bindings:
				if binding['p']['type']== 'uri' and binding['p']['value']== 'http://www.w3.org/2000/01/rdf-schema#label' and binding['o']['xml:lang']== 'en':
					print(binding['o']['value'].replace(" ","_"))
					entity_name =binding['o']['value']
				if binding['p']['type']== 'uri' and binding['p']['value'] == "http://www.w3.org/1999/02/22-rdf-syntax-ns#type":
					print("\t\t",binding['o']['value'])
					candidate_classes.append(binding['o']['value'])

			if len(candidate_classes) > 0:
				outputfile.write(entity_name+","+",".join(candidate_classes))
				outputfile.write("\n")
			else:
				if entity_name != '':
					blankfile.write(entity_name+','+json.dumps(data_item))
					blankfile.write("\n")

	#print("blank entities/total lines",blank_entities)


if __name__ == "__main__":
	main(sys.argv[1:])