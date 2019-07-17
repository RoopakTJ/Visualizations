from wordcloud import WordCloud
from nltk.tokenize import RegexpTokenizer
from matplotlib import pyplot as plt
import pandas as pd


def tokenise(s):
    s = str(s)
    tokenizer = RegexpTokenizer(r"\w+(?:[-']\w+)?")
    unigram = tokenizer.tokenize(s)
    return unigram

cong = pd.read_csv('BJP.csv')

vocab = []

for index, row in cong.iterrows():
    row_vocab = tokenise(row[1])
    for t in row_vocab:
        vocab.append(t)
vocab = list(set(vocab))

stopwords = open("stopwords_en.txt", "r")
stops = stopwords.read()

new_vocab = [str(w) for w in vocab if w not in stops]

cloud = WordCloud(background_color="black", width=800, height=400, margin=2, mode='RGB').generate(",".join(new_vocab))
fig = plt.figure(figsize=(10,10))
plt.imshow(cloud)
plt.axis('off')
plt.show()
