import codecs
from collections import Counter

file=codecs.open("process_wiki_files_output_BIO/corpus_total_BIO","r","UTF-8")
text=file.readlines()

list_tags=[]

for line in text:
	line_split=line.split("\t")
	if len(line_split)>1:
		list_tags.append(line_split[1])

cnt = Counter(list_tags)

result=codecs.open("statistics_BIO","w","UTF-8")


list_cnt=[]
list_qtty=[]
for i in cnt.items():
	list_cnt.append(i[0])
	list_qtty.append(i[1])

count_B_I=0
count_B=0
for i,token in enumerate(list_cnt):
	if token == "O\n":
		count_O=list_qtty[i]
	if token != "O\n":
		count_B_I+=list_qtty[i]
	if token.startswith("B-"):
		count_B+=list_qtty[i]


result.write("Number of Tokens: " + str(len(list_tags)) + "\n\n")

result.write("Number of tokens not part of entities (O): " + str(count_O) + "\n\n")

result.write("Number of tagged entities (B and I): " + str(count_B_I) + "\n\n")

result.write("Number of entities: " + str(count_B) + "\n\n")


result.write("Total Statistics:\n\n")
for i in cnt.items():
	result.write(i[0].strip("\n") + "\t" + str(i[1]) + "\n")

result.write("\n\nEntities Statistics:\n\n")
for i in cnt.items():
	if (i[0].startswith("B-")):
		result.write(i[0].strip("\n").strip("B-") + "\t" + str(i[1]) + "\n")