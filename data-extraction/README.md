# Data extraction process

## 1. Get and process Wikipedia dumps

### 1.1. Clone the wiki extractor

```
git clone https://github.com/attardi/wikiextractor.git
```
### 1.2. Get the latest wikipedia dump (En for now)
```
wget http://dumps.wikimedia.org/enwiki/latest/enwiki-latest-pages-articles.xml.bz2
```
### 1.3. Perform text extraction from dump preserve the links (-l)
```
python -m wikiextractor.WikiExtractor -o <output_folder> -l --no_templates --processes 8 <path_to_bz2_file>
```
### 1.4. Find all the hrefs from the text files, unique and sort them to a file 
```
find ./ -name 'wiki*' | xargs grep -o -P "(<a href=\").*?\">" | sort -u > <outputfile>
```
This outputs linked entities from Wikipedia articles as a list of strings.

## 2. Query DBpedia for classes
### 2.1.  Install for sparqlwrapper
```
pip install SPARQLWrapper
```
### 2.2. Run script _query_dbpedia.py_ to fetch results from dbpedia
```
python query_dbpedia.py -i <inputfile> -o <outputfile> -c <completedfile>
```
This script will use the output file from step 1.4 as input file. It will write as output:
- An output file with the query responses to each successfuly queried entity;
- A completed file with the list of successfuly queried entities so that if the process needs to be restarted we can skip the already fetched entities;
- An error log with the entities which failed to be querried.

### 2.3. Run script _class_extract_dbpedia.py_ to extract dbpedia classes
```
python class_extract_dbpedia.py -i <inputfile> -o <outputfile> -b <blanksfile>
```
This script will use the output file from step 2.2 as input file. It outputs two files:
- An output file with entities and their classes according to DBpedia;
- A blanks file with all entities which did not have any type associated to it, along with their SPAQRL responses.

### 2.4. Run script _process_wiki_files.py_ to produce UNER tagged data
```
python process_wiki_files.py -i <inputfile> -o <outputfolder> --unerpath <unerpath> --wikipath <wikipath>
```
This script will use the output file from step 2.3 as input file.
You can also specify the path to the UNER mapping and the path to the wikipedia dumps. If you leave them empty, they default to the _wiki_ and the _uner_ folders.
You can also specify the output folder for all output produced. It defaults to _process_wiki_files_output_.

This generates as output:
- A folder with a subfolder for each wikipedia partition. Each subfolder has a txt file with the annotations and a pkl file with a pickled annotation data structure. 
- A file called _Entities_Statistics_ with basic statistical information of the generated corpus (number of sentences and number of tokens).

## 3. Post-Processing (BIO format and Advanced Statistics)

### 3.1. Run script _punct_alignment_BIO.py_ to format UNER tagged data (BIO). 
```
python punct_alignment_BIO.py
```

This script will use the output from step 2.4 as input. If the name of this output folder is different than _process_wiki_files_output_, change the name in this script.
It verifies tokenization, correcting some punctuation problems and format the annotations according to the BIO format.  

It generates as output: 
- A folder (_process_wiki_files_output_BIO_) with with a subfolder for each wikipedia partition. Each subfolder has a txt file with the annotations with the applied corrections and using the BIO format. 
- A concatenated file (inside the output folder) _corpus_total_BIO_ with the whole annotated text (to be used in the next steps for statistical analysis). 

This output can then be used to train a tagging model for that language. You have a choice of using the concatened file or select files from the subfolders.


### 3.2. Run script _statistics_BIO.py_ to get statistical information about the annotations. 
```
python statistics_BIO.py
```

This script will use the concatenated output file from step 3.1 (_corpus_total_BIO_) as input.

It generates _statistics_BIO_ file with the following information:
- Number of tokens
- Number of tokens with "O" tag
- Number of tokens concerning entities (tagged "B" or "I")
- Number of entities in the corpus
- List of UNER classes and number of occurrences in the corpus. 

### 3.3. Run script _statistics_BIO_advanced.py_ for further statistical information. 
```
python statistics_BIO_advanced.py
```

This script will use the concatenated output file from step 3.1 (_corpus_total_BIO_) as input.

It generates _statistics_advanced_BIO_ file with the following information:
- Number of unique entities in the concatenated corpus
- List of the unique entities and the corresponding UNER tag

