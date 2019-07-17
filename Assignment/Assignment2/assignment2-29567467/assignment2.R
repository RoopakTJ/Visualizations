# FIT5147 : Data exploration and visualistion S1 2019
# Name : Roopak Thiyyathuparambil Jayachandran
# StudentId : 29567467
# Tutor : Joy Zhao

# Assignment 2 : R programming

# Imports
require(ggplot2)
require(shiny)
require(leaflet)

# Understand the working directory
getwd()

# Part 1 : Import the data to R script, keeping the first row as header

input_file <- "assignment-02-data-formated.csv"
df <- read.csv(input_file, header = TRUE)
# Converting value field to numeric
df$value <- as.numeric(sub("%", "", df$value,fixed=TRUE))/100


# Part 2 : Static tabular visualisation using ggplot2. Visualisation using facet grid with sites
# ordered by latitudes

# Using factor function to order the sites with respect to latitude. This new factor which is used to plot the facet
# will be in order of decreasing latitude since latitude is in negative value.

df$location = factor(df$location, levels = unique(df[order(df$latitude, decreasing = TRUE),]$location))

unique(df$location)

# Plotting the plot using ggplot2 (scatter plot) and facet
test <- ggplot(data = df, aes(x=df$year, y=df$value, colour=df$coralType)) + 
  geom_point(size = 3) +
  # Coral type on vertical axis and Location on horizontal axis
  facet_grid(df$coralType ~ df$location) +
  # Setting y limit to 1
  ylim(0,1) +
  xlab("Years") +
  ylab("Bleaching Percentage") +
  ggtitle("Bleaching on different coral site for different types") +
  # Title position adjustment
  theme(plot.title = element_text(hjust = 0.5)) +
  # Legend title
  labs(colour="Coral Types") +
  # Added smoothers with confidence interval
  geom_smooth(method = "lm", se = TRUE, na.rm = TRUE) +
  theme_dark()
test

# Part 3 and 5 in shiny application. Please go through the code in the corressponding file.

# Part 4 : Map using leaflet showing the location of the sites
map <- leaflet() %>%
  addTiles()

map <- map %>%
  addMarkers(lat = unique(df$latitude), lng = unique(df$longitude), popup = unique(df$location))
  
map
