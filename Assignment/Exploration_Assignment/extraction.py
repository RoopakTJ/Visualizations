# Assignment 3 - Data Exploration and Visualisation
# Extracting data using Twitter API call

import tweepy
import re
from textblob import TextBlob
import pandas as pd

consKey = "4TGPfg62pT76yWTnTE8INjJCL"
consSecret = "dkhHybaFTIAflvCVB5vFHQPu0eCHFQN1BIbpdx3hjt8q3aRqWy"
accessKey = "3061686882-PrrngsYGKlMV92KseseATs1Gjr5Yyucry61Lwl2"
accessSecret = "aLOiD62JKQg29mSoz6chfpLP7fbBpG4syMuaUvlAqe9J0"

auth = tweepy.OAuthHandler(consumer_key=consKey, consumer_secret=consSecret)
auth.set_access_token( accessKey,  accessSecret)
api = tweepy.API(auth, wait_on_rate_limit=True)
tweets = tweepy.Cursor(api.search, q="BJP", lang="en").items(1000)

api = []
text = []
created_date = []
lati = []
longi = []
polarity = []
impressions = []
pol_value = []
followers = []
user_location = []

def extractCoordinates(stri):
    a = re.findall(r"coordinates=.+?\)", stri, re.DOTALL)
    if len(a) > 0:
        b = re.findall(r"\[.*?\]",a[0], re.DOTALL)
        if len(b) > 0:
            c = b[0][3:-1]

        d = c.split(",")
        lat = d[0]
        lon = d[1]
        return lon, lat
    else:
        return None,None

count = 0

for each in tweets:

    api.append(each)
    if each.place == None:
        continue
    count += 1
    created_date.append(each.created_at)
    text.append(each.text)
    longi.append(extractCoordinates(str(each.place))[0])
    lati.append(extractCoordinates(str(each.place))[1])
    impressions.append(each.retweet_count + each.user.favourites_count)
    followers.append(each.user.followers_count)
    user_location.append(each.user.location)


    emotion = TextBlob(each.text)
    emo = emotion.sentiment.polarity
    if emo >= 0.5:
        polarity.append("Highly Positive")
    if emo <= -0.5:
        polarity.append("Highly Negative")
    if emo == 0:
        polarity.append("Neutral")
    if 0 < emo < 0.5:
        polarity.append("Positive")
    if -0.5 < emo < 0:
        polarity.append("Negative")

    pol_value.append(round(emo, 2))

BJPDict = {'text': text, 'created_date':created_date, 'latitude':lati, 'longitude':longi, 'retweet':impressions,
                     'polarity':polarity, 'pol_value': pol_value, 'followers': followers, 'location':user_location}

BJP = pd.DataFrame(BJPDict)
print(BJP.head())


BJP.to_csv("bjp_loc3.csv", sep=',', encoding='utf-8')


