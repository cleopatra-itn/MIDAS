# MIDAS Demonstrator

## Contributors
- Diego Alves (ESR14)
- Gabriel Maia (ESR3)
- Gaurish Thakkar (ESR15)
- Tin Kuculo (ESR1)

## Summary
This is one of the demonstrators created during the Cleopatra project. This demonstrator was developed by receiving funding from the European Union’s Horizon 2020 research and innovation programme under the Marie Skłodowska-Curie grant agreement no. 812997.
The goal of the demonstrator is to parse data from Wikipedia corpora in multiple languages, extract named entities through hyperlinks, and align them with entity classes from DBpedia. This will generate a named entity corpus with DBpedia class annotations which we’ll then translate to a new complex tagging hierarchy, UNER. The final objective is to train models on recognizing and tagging named entities with a multi-tiered tagging hierarchy. 
This will grant us a Named Entity dataset creation workflow which works for languages covered by both Wikipedia and DBpedia, including under-resourced languages. With these datasets, we can then create trained models in those same languages, leading us to a multilingual Named Entity Recognition and Classification (NERC) platform.

## Supported Languages
Multilingual information retrieval is conducted in the top 10 most spoken languages in the EU: 
- EN (English)
- HR (Croatian)
More to be developed and deployed in the future.
	Note: You can generate datasets and train your own models by using the code available in this repository.

## UI Functionalities
The main UI for this demonstrator is located at: [http://cleopatra.ijs.si/midas/](http://cleopatra.ijs.si/midas/).
Currently, it only supports the languages listed above.
It has the following functionalities:
- Raw text NERC annotation using the UNER hierarchy;
- Selection of Coarse-grained vs Fine-grained annotations;
- Webpage annotation functionality based on the URL;
- Selection of multiple languages (in progress);
- Text file input and NERC-annotated text file output functionalities (in progress).

## Relevant Publications
- [UNER: Universal Named-Entity Recognition Framework (CLEOPATRA Workshop 2020 co-located with ESWC)](UNER-documentation/UNER_Universal_Named-Entity_Recognition_Framework_paper.pdf). 

## About this Repository

This repository makes available:
- [The **Documentation**](Uner-documentation/): Documents, files and publications that serve to explain design decisions and work done.


