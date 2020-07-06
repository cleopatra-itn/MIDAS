import os 
import json


data = []
counter = 668725 #4158656  #3568183
with open('info_dbpedia_v3.txt') as f, open("candidate_classes.txt","w") as outputfile,open("blank_classes.txt","w") as blankfile:
    entity_name =""
    candidate_classes =[]
    write_to_file =False
    blank_entities = 0

    for index, line in enumerate(f):
        data_item = None
        if index < counter:
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
            if len(bindings):
                if index != 0 and write_to_file == True:
                    #write to a file
                    outputfile.write(entity_name+","+",".join(candidate_classes))
                    outputfile.write("\n")
                    entity_name =""
                    candidate_classes =[]
            
                write_to_file= True
                for binding in bindings:
                    if binding['p']['type']== 'uri' and binding['p']['value']== 'http://www.w3.org/2000/01/rdf-schema#label' and binding['o']['xml:lang']== 'en':
                        print(binding['o']['value'].replace(" ","_"))
                        entity_name =binding['o']['value']
                    if binding['p']['type']== 'uri' and "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" == binding['p']['value']:
                        print("\t\t",binding['o']['value'])
                        candidate_classes.append(binding['o']['value'])
                print()
            else:
                # need to write file blank examples
                blankfile.write(json.dumps(data_item))
                blankfile.write("\n")
                blank_entities +=1

print("blank entities/total lines",blank_entities,"/",counter)


# with open("candidate_classes.txt","w") as outputfile:
#     entity_name =""
#     candidate_classes =[]
#     write_to_file =False
#     blank_entities = 0
#     for index,data_item in enumerate(data):
        
#         bindings = data_item['results']['bindings']
#         if len(bindings):
#             if index !=0 and write_to_file == True:
#                 #write to a file
#                 outputfile.write(entity_name+","+",".join(candidate_classes))
#                 outputfile.write("\n")
#                 entity_name =""
#                 candidate_classes =[]
        
#             write_to_file= True
#             for binding in bindings:
#                 # print(binding)
#                 if binding['p']['type']== 'uri' and binding['p']['value']== 'http://www.w3.org/2000/01/rdf-schema#label' and binding['o']['xml:lang']== 'en':
#                     print(binding['o']['value'].replace(" ","_"))
#                     entity_name =binding['o']['value']
#                 if binding['p']['type']== 'uri' and "http://www.w3.org/1999/02/22-rdf-syntax-ns#type" == binding['p']['value']:
#                     print("\t\t",binding['o']['value'])
#                     candidate_classes.append(binding['o']['value'])
#             print()
#         else:
#             blank_entities +=1
# print("blank entities",blank_entities,"/",len(data))