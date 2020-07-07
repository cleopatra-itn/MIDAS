import sklearn
import pickle
import argparse
from crf_ner import *
import get_data

parser = argparse.ArgumentParser(description='Predicting with classifier')
parser.add_argument("-i", '--input_file', type=str, default='AA/wiki_00')
parser.add_argument("-o", "--output_file", type=str, default='output.txt')

args = parser.parse_args()

# getting sentences from 20 .pkl files
X = get_data.get(20)

# extracting features
train_sents, test_sents = train_test_split(X, test_size=0.33, random_state=42)	
X_train = [sent2features(s) for s in train_sents]
y_train = [sent2labels(s) for s in train_sents]
X_test = [sent2features(s) for s in test_sents]
y_test = [sent2labels(s) for s in test_sents]


# loading classifier
with open("classifier.pkl", "rb") as f:
    clf = pickle.load(f)


labels = list(clf.classes_)
labels.remove('O')
#print("Labels: ", labels)

# prediction
y_pred = clf.predict(X_test)

# getting paragraphs of shape [[[token, label],..,[]], ...[[],..,[]]] 
# that contain 4 accurately predicted sentences and minimum 12 entities
paragraphs = get_data.find_a_correct_paragraph(test_sents, y_pred)
"""
for i, p in enumerate(paragraphs):
    print(p)
    print()
    print("@ %d @" %(i))
"""
# selecting a paragraph and converting labels to selected level
paragraph = paragraphs[5]
paragraph = get_data.get_output_level(paragraph, level=3)

"""
print("Metrics : \n", metrics.flat_f1_score(y_test, y_pred, 
                    average='weighted', labels=labels))
"""                                       

sorted_labels = sorted(
    labels, 
    key=lambda name: (name[1:], name[0])
)
"""
print(y_pred)
print(metrics.flat_classification_report(y_test, \
    y_pred, labels=sorted_labels, digits=3))
"""