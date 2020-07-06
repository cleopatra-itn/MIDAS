from   engine import *
link ="https://www.bbc.co.uk/news/world-middle-east-52118803"

news_text = extract_news_article(link)
# extract_quote_textcy(news_text)
tag_sentiment(news_text,False)