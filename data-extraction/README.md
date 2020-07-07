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
python3 WikiExtractor.py -o <output_folder> -l --no_templates --processes 8 <path_to_bz2_file>   
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
python class_extract_dbpedia.py -i <inputfile> -o <outputfile>
```
This script will use the output file from step 2.2 as input file. It outputs two files:
- An output file with entities and their classes according to DBpedia;
- A blanks file with all entities which did not have any type associated to it, along with their SPAQRL responses.


