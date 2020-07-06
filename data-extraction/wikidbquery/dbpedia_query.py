from SPARQLWrapper import SPARQLWrapper, JSON
import json
import re


file=open("../data/wiki/dbqueries.txt","r")
sentences=file.readlines()

list_entities=[]
for element in sentences:
	element = re.search("\"(.*?)\"", element.strip("\n"))
	list_entities.append(element.group()[1:-1])

def get_country_description(word):
    sparql = SPARQLWrapper("http://dbpedia.org/sparql")
    sparql.setReturnFormat(JSON)
    query_sent="PREFIX db: <http://dbpedia.org/resource/> \n SELECT ?p ?o \n WHERE { db:" + word + " ?p ?o }"
    sparql.setQuery(query_sent)
    return sparql.query().convert()

i=0
counter=0
list_dbpedia_entities=[]
for element in list_entities:
	result_dict=get_country_description(element)
	with open("result_test_dbpedia", "w") as f:
		print(result_dict, file=f)
	f.close()
	with open ("result_test_dbpedia", "r") as f:
		info=f.read()
	if ("'o': {'type': 'uri', 'value': 'http://dbpedia.org/ontology" or "'o': {'type': 'uri', 'value': 'http://dbpedia.org/class/yago/") in info:
		counter+=1
		list_dbpedia_entities.append(element)
		print(element)
	if (i%1000==0):
		print(i,len(list_entities),sep="/")
	i+=1


print(counter)
dbpedia_result_file=open("entities_in_dbpedia.txt","w")

for element in list_dbpedia_entities:
	dbpedia_result_file.write(element)
	dbpedia_result_file.write("\n")

