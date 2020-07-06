from SPARQLWrapper import SPARQLWrapper, JSON
import json
import re
import sys
import getopt
import os
from urllib.parse import unquote

def sparql_query(word):
	sparql = SPARQLWrapper("http://dbpedia.org/sparql")
	sparql.setReturnFormat(JSON)
	query_sent="PREFIX db: <http://dbpedia.org/resource/>  SELECT ?p ?o  WHERE { <http://dbpedia.org/resource/" + word + "> ?p ?o }"
	sparql.setQuery(query_sent)
	return sparql.query().convert()

def main(argv):
	script_dir = os.path.dirname(__file__)
	inputfile = ''
	outputfile = ''
	completedfile = ''
	try:
		opts, args = getopt.getopt(argv,"hi:oc:",["ifile=","ofile=","completed="])
	except getopt.GetoptError:
		print 'query_dbpedia.py -i <inputfile> -o <outputfile> -c <completedfile>'
		sys.exit(2)
	for opt, arg in opts:
		if opt == '-h':
			print 'test.py -i <inputfile> -o <outputfile> -c <completedfile'
			sys.exit()
		elif opt in ("-i", "--ifile"):
			inputfile = arg
		elif opt in ("-o", "--ofile"):
			outputfile = 
		elif opt in ("-c", "--completed"):
			completedfile = arg
	if outputfile == '':
		outputfile = 'query_dbpedia_output.txt'
	if completedfile == '':
		completedfile = 'completed.txt'

	# read the entities to be queried
	file=open(script_dir + inputfile,"r")
	sentences = file.readlines()
	file.close()

	# create empty file if not exists
	if not os.path.exists(script_dir+completedfile):
	    open(script_dir+completedfile, 'a+').close()

	def refresh_completed():
	    completed_entities= []
	    with open(script_dir+completedfile) as f:
	        for line in f:
	            line = line.strip()
	            if line:
	                completed_entities.append(line)
	    return completed_entities

	completed_entities = refresh_completed()
	list_entities = []
	i = 0

	with open(script_dir + outputfile, "w") as dbpedia_result_file, open(script_dir + completedfile,"a") as completed, open("error.log","a+") as error_log:
	    for entity in sentences:
	        entity = re.search("\"(.*?)\"", entity.strip("\n"))
	        # check if entity is already checked
	        print(entity,entitiy.group())
	        entity = entity.group()[1:-1] # "a"=>a
	        if entity not in completed_entities:
	            try:
	                info = sparql_query(unquote(entity))
	                json.dump(info, dbpedia_result_file)
	                
	                completed_entities.append(entity)
	                
	                dbpedia_result_file.write("\n")
	                completed.write(entity+"\n")

	                #print(entity)
	                if (i % 1000 == 0):
	                    print(i, len(list_entities), sep="/")
	                    dbpedia_result_file.flush()
	                    completed.flush()
	                i += 1
	            except Exception as e:
	                error_log.write(entity+"\n")
	        else:
            	#print("already processed",entity)
            	continue

if __name__ == "__main__":
   main(sys.argv[1:]
