from SPARQLWrapper import SPARQLWrapper, JSON
import json
import re
import os

def get_country_description(word):
    sparql = SPARQLWrapper("http://dbpedia.org/sparql")
    sparql.setReturnFormat(JSON)
    query_sent="PREFIX db: <http://dbpedia.org/resource/>  SELECT ?p ?o  WHERE { <http://dbpedia.org/resource/" + word + "> ?p ?o }"
    sparql.setQuery(query_sent)
    return sparql.query().convert()

# read the entities to be queried
file=open("../data/wiki/dbqueries.txt","r")
sentences = file.readlines()
file.close()

# read the already completed queries
completed_entities= []
writepath = 'completed.txt'

# create empty file if not exists
if not os.path.exists(writepath):
    open(writepath, 'a+').close()

def refresh_completed():
    completed_entities= []
    with open(writepath) as ip_file:
        for line in ip_file:
            line = line.strip()
            if line:
                completed_entities.append(line)
    return completed_entities

completed_entities = refresh_completed()
print(completed_entities)
list_entities = []
i = 0
counter = 0
with open("info_dbpedia_v3.txt", "w") as dbpedia_result_file, open(writepath,"a") as ip_file, open("error.txt","w") as error_log:
    for element in sentences:
        element = re.search("\"(.*?)\"", element.strip("\n"))
        # check if element is already checked
        element = element.group()[1:-1] # "a"=>a
        if element not in completed_entities:
            try:
                info = get_country_description(element.replace("%20","_"))
                json.dump(info, dbpedia_result_file)
                
                completed_entities.append(element)
                
                dbpedia_result_file.write("\n")
                ip_file.write(element+"\n")

                print(element)
                if (i % 1000 == 0):
                    print(i, len(list_entities), sep="/")
                    dbpedia_result_file.flush()
                    ip_file.flush()
                i += 1
            except Exception as e:
                error_log.write(element+"\n")
        else:
            print("already procees",element)
print(counter)

