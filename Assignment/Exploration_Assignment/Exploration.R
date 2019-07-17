require(ggplot2)

setwd('/Users/roopak/Documents/Monash/Semester-2/Visualisation/Assignment/Exploration_Assignment')
bjp <- read.csv("BJP.csv", header=TRUE)

cong <- read.csv("Cong.csv", header=TRUE)
head(cong)

# Density plot for polarity
ggplot(cong, aes (cong$pol_value)) + geom_density() +
xlab("Sentiments") +
ylab("Density") +
ggtitle("Density plot of Twitter Sentiment for Congress") +
labs(fill="Sentiment categories")
  # Title position adjustment
theme(plot.title = element_text(hjust = 0.5))
# Added smoothers with confidence interval

ggplot(bjp, aes (bjp$pol_value)) + geom_density() +
xlab("Sentiments") +
  ylab("Density") +
  ggtitle("Density plot of Twitter Sentiment for BJP") +
  labs(fill="Sentiment categories") +
# Title position adjustment
  theme(plot.title = element_text(hjust = 0.5))
# Added smoothers with confidence interval

ggplot(bjp, aes (bjp$retweet)) + geom_histogram() +
  xlab("Retweet Count") +
  ylab("Frequency") +
  ggtitle("Histograms in Impressions in BJP") +
# Title position adjustment
theme(plot.title = element_text(hjust = 0.5))
# Added smoothers with confidence interval

ggplot(cong, aes (cong$retweet), fill = cong$polarity) + geom_histogram() +
  xlab("Retweet Count") +
  ylab("Frequency") +
  ggtitle("Histograms in Impressions in Congress") +
  # Title position adjustment
  theme(plot.title = element_text(hjust = 0.5))
# Added smoothers with confidence interval



ggplot(cong, aes (cong$polarity), fill = 'red') + geom_bar(stat = "count") +
  xlab("Sentiment Categories") +
  ylab("Frequency") +
  ggtitle("Count of Sentiments for Congress") +
  # Title position adjustment
  theme(plot.title = element_text(hjust = 0.5))
# Added smoothers with confidence interval

ggplot(bjp, aes (bjp$polarity), fill = 'red') + geom_bar(stat = "count") +
  xlab("Sentiment Categories") +
  ylab("Frequency") +
  ggtitle("Count of Sentiments for BJP") +
  # Title position adjustment
  theme(plot.title = element_text(hjust = 0.5))

# Added smoothers with confidence interval


cong_loc1 <- read.csv("Cong_loc.csv", header=TRUE)
cong_loc2 <- read.csv("Cong_loc2.csv", header=TRUE)
cong_loc3 <- read.csv("Cong_loc3.csv", header=TRUE)
cong_loc4 <- read.csv("Cong_loc4.csv", header=TRUE)

cong<-merge(cong,cong_loc4, all.x=TRUE, all.y=TRUE)


require(leaflet)
map <- leaflet() %>%
  addTiles()

map <- map %>%
  addCircleMarkers(lng = cong$latitude, lat = cong$longitude, group = "circles", label = cong$polarity,
                   fillColor = ifelse(cong$pol_value>-0.1 , "red", "blue"), color=ifelse(cong$pol_value>-0.1 , "red", "blue"),
                   labelOptions = labelOptions(noHide = TRUE, textOnly = TRUE, textsize = 12))

map

bjp_no <- na.omit(bjp)

bjp_loc1 <- read.csv("bjp_loc1.csv", header=TRUE)
bjp_loc2 <- read.csv("bjp_loc2.csv", header=TRUE)
bjp_loc3 <- read.csv("bjp_loc3.csv", header=TRUE)

bjp<-merge(bjp,bjp_loc3, all.x=TRUE, all.y=TRUE)


map2 <- leaflet() %>%
  addTiles()

map2 <- map2 %>%
  addCircleMarkers(lng = bjp_no$latitude, lat = bjp_no$longitude, group = "circles", label = bjp_no$polarity,
                   fillColor = ifelse(bjp_no$pol_value>-0.1 , "red", "blue"), color=ifelse(bjp_no$pol_value>-0.1 , "red", "blue"), 
                   labelOptions = labelOptions(noHide = TRUE, textOnly = TRUE, textsize = 12))

map2

