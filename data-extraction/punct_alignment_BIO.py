import os
import codecs
import string
import re
from collections import Counter

class config:
	OUTPUT_PATH = "process_wiki_files_output"

wiki_dirs = [name for name in os.listdir(config.OUTPUT_PATH) if os.path.isdir(os.path.join(config.OUTPUT_PATH, name)) ]

result_concat=codecs.open("corpus_total_BIO","w","UTF-8")

os.mkdir("process_wiki_files_output_BIO")

for wiki_dir in wiki_dirs:
	full_folder_path = os.path.join(config.OUTPUT_PATH,wiki_dir)
	os.mkdir(os.path.join("process_wiki_files_output_BIO/",wiki_dir))
	for wiki_file in os.listdir(full_folder_path):
		if not wiki_file.endswith(".pkl"):
			with open(os.path.join(full_folder_path,wiki_file)) as fp:
				print(wiki_file)
				result=codecs.open(os.path.join("process_wiki_files_output_BIO/",wiki_dir,wiki_file),"w","utf-8")
				text=fp.readlines()
				list_tokens=[]
				list_tags=[]
				for token in text:
					if token != "\n":
						tok=token.split("\t")
						list_tokens.append(tok[0])
						list_tags.append(tok[1])
					else:
						list_tokens.append("")
						list_tags.append("")

				list_punct=string.punctuation

				list_tokens_punct=[]
				list_tags_punct=[]
				for i,token in enumerate(list_tokens):
					if(token==""):
						list_tokens_punct.append("")
						list_tags_punct.append("")
					tok=re.sub(r"([\w/'+$\s]+|[^\w/'+$\s]+)\s*", r"\1\t", token)
					tok_split=tok.split("\t")
					if len(tok_split)==2:
						list_tokens_punct.append(tok_split[0])
						list_tags_punct.append(list_tags[i])
					else:
						j=0
						while(j<len(tok_split)-1):
							if(tok_split[j] in list_punct):
								list_tokens_punct.append(tok_split[j])
								list_tags_punct.append("O\n")
							else:
								list_tokens_punct.append(tok_split[j])
								list_tags_punct.append(list_tags[i])
							j+=1
				
				list_tags_punct_BIO=[]

				for i,tok in enumerate(list_tokens_punct):
					if list_tags_punct[i] != "O" and list_tags_punct[i] != "O\n" and list_tags_punct[i] != "" and list_tags_punct[i] != "\n":
						if list_tags_punct[i] != list_tags_punct[i-1]:
							list_tags_punct_BIO.append("B-"+list_tags_punct[i])
						else:
							list_tags_punct_BIO.append("I-"+list_tags_punct[i])
					else:
						list_tags_punct_BIO.append(list_tags_punct[i])



				for i,tok in enumerate(list_tokens_punct):
					if (tok!=""):
						result.write(tok + "\t" + list_tags_punct_BIO[i])
						result_concat.write(tok + "\t" + list_tags_punct_BIO[i])
					else:
						result.write("\n")
						result_concat.write("\n")
