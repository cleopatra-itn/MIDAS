import os
import sys

import requests
import spacy
from newspaper import Article
import nltk
import json
import pickle
import sklearn_crfsuite


print("Loading...")

_path = os.path.dirname(__file__)
print(_path)
dumped_classifier = "/mnt/data/group3/tin/tink/110000/dumped_classifier.pkl"
with open(dumped_classifier, "rb") as f:
	crf = pickle.load(f)

from spacy.lang.en import English

nlp = English()
sentencizer = nlp.create_pipe("sentencizer")
nlp.add_pipe(sentencizer)

print("Loaded!")



def word2features(sent, i):
    print(sent,i)
    word = sent[i][0]
    # postag = sent[i][1]
    features = {
        'bias': 1.0,
        'word.lower()': word.lower(),
        'word[-3:]': word[-3:],
        'word[-2:]': word[-2:],
        'word.isupper()': word.isupper(),
        'word.istitle()': word.istitle(),
        'word.isdigit()': word.isdigit(),
        #'postag': postag,
        #'postag[:2]': postag[:2],        
    }
    if i > 0:
        word1 = sent[i-1][0]
        # postag1 = sent[i-1][1]
        features.update({
            '-1:word.lower()': word1.lower(),
            '-1:word.istitle()': word1.istitle(),
            '-1:word.isupper()': word1.isupper(),
            #'-1:postag': postag1,
            #'-1:postag[:2]': postag1[:2],
        })
    else:
        features['BOS'] = True
        
    if i < len(sent)-1:
        word1 = sent[i+1][0]
        # postag1 = sent[i+1][1]
        features.update({
            '+1:word.lower()': word1.lower(),
            '+1:word.istitle()': word1.istitle(),
            '+1:word.isupper()': word1.isupper(),
            #'+1:postag': postag1,
            #'+1:postag[:2]': postag1[:2],
        })
    else:
        features['EOS'] = True
                
    return features


def sent2features(sent):
    sent = [[word] for word in sent.split()]
    return [word2features(sent, i) for i in range(len(sent))]




# Tag text with spacy model
def tag_named_entities(text):
    test_sents = [sent.text for sent in (nlp(text).sents)]
    
    print("spacy",test_sents)

    X_test = [sent2features(s) for s in test_sents]
    print(X_test[-1])

    y_pred = crf.predict(X_test)

    print(y_pred, file=sys.stdout)
    result= []
    for i, sentence in enumerate(test_sents):
        result.append([(word, tag) for word, tag in zip(sentence.split(),y_pred[i])])
    return text, result



# Document extraction


def tag_document(text):
   
    text, predictedNerText = tag_named_entities(text)
    return text, predictedNerText


# News article extraction

def tag_news_article(url):
    text = extract_news_article(url)
    print(text, file=sys.stdout)
    return tag_document(text)


def extract_news_article(url):
    # Read the url
    article = Article(url)

    # Get the news article
    article.download()

    article.parse()
    news_article = article.text
    news_article = news_article.replace('“', '"')
    news_article = news_article.replace('”', '"')
    news_article = news_article.replace('\\n', '')
    return news_article


# paragraph : [[["John","Name"]],...,[]]]
def get_output_level(paragraph, level=3):
    
	# level [1-n]
	new_par = []
	for sentence in paragraph:
		temp = []
		for word in sentence:
			tag = word[1].split("-")
			temp.append([word[0], '-'.join(tag[:level])])
		new_par.append(temp)
	return new_par