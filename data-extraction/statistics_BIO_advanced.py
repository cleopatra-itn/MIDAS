import codecs
from collections import Counter

file=codecs.open("corpus_total_BIO","r","UTF-8")
text=file.readlines()

list_tags=[]
list_tokens=[]

for line in text:
	line_split=line.split("\t")
	if len(line_split)>1:
		list_tags.append(line_split[1])
		list_tokens.append(line_split[0])


list_entities=[]
list_tags_final=[]

entity=""

for i,element in enumerate(list_tokens):
	if list_tags[i] != "O\n":
		if(entity==""):
			entity=entity+element
		else:	
			entity=entity+ " " + element.strip("\n")
	else:
		if(entity != ""):
			list_entities.append(entity)
			list_tags_final.append(list_tags[i-1].strip("B-").strip("I-"))
		entity=""

set_list_entities=set(list_entities)
print(len(set_list_entities))

final_entities=[]
final_tags=[]
for i,element in enumerate(list_entities):
	if element not in final_entities:
		final_entities.append(element)
		final_tags.append(list_tags_final[i])


result=codecs.open("statistics_advanced_BIO","w","UTF-8")

result.write("Number of unique entities: " + str(len(final_entities)))
result.write("\n\nUnique Entities:\n\n")

for i,element in enumerate(final_entities):
	result.write(element + "\t" + final_tags[i])

