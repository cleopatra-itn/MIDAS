# wikipedia-extraction

## Clone the wiki extractor
```
git clone https://github.com/attardi/wikiextractor.git   
```
## Get the latest wikipedia dump (En for now)
```
wget http://dumps.wikimedia.org/enwiki/latest/enwiki-latest-pages-articles.xml.bz2    
```
## Perform text extraction from dump preserve the links (-l)
```
python3 WikiExtractor.py -o ../data/wiki/ -l --no_templates --processes 8 ../data/enwiki-latest-pages-articles.xml.bz2   
```
## Find all the hrefs from the text files, unique and sort them to a file 
```
find ./ -name 'wiki*' | xargs grep -o -P "(<a href=\").*?\">" | sort -u > dbqueries.txt                                                                                                              
```
## Install for sparqlwrapper
```
pip install SPARQLWrapper
```
## Run to fetch results from the dbpedia
```
python test_dbpedia_query.py
```
This script will write the response as well as the completed entities to a file so that if the process needs to be restarted we can skip the already fetched entities.

Follow this blog for any problems:
https://spark-in.me/post/parsing-wikipedia-in-four-commands-for-nlp
