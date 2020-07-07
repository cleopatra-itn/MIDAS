import glob
import pickle
def get(num_files=500):
	X = []
	files = glob.glob('AA/*.pkl')
	print("Total number of files",len(files)) # 17150
	files = files[:num_files] # 500 = ~3%
	print("Training number of files", len(files))

	for i, file in enumerate(files):
		with open(file, "rb") as f:
			tmp = pickle.load(f)
			tmp = [sentence[:-1] for sentence in tmp]
			if X:
				X += tmp
			else:
				X = tmp
	return X

def find_a_correct_paragraph(test_sents,y_pred, num=4):
	paragraph = []
	paragraphs = []
	for sentence1, sentence2 in zip(test_sents, y_pred):
		for word1,word2 in zip(sentence1,sentence2):
			if word1[1] != word2:
				paragraph = []
				break
		paragraph.append(sentence1)
		if len(paragraph) == num:
			num_of_tags = [word for sentence in paragraph for word in sentence if word[1]!='O']
			num_of_tags = len(num_of_tags)
			if num_of_tags > num*3:
				paragraphs.append(' '.join([word[0] for sentence in paragraph for word in sentence]))
	return paragraphs
			

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

			
			
			
	
