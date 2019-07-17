# FIT5147 : Data exploration and visualistion S1 2019
# Name : Roopak Thiyyathuparambil Jayachandran
# StudentId : 29567467
# Tutor : Joy Zhao

# server.R
library(shiny)
library(leaflet)
# Define server logic required to draw a histogram
shinyServer(function(input, output) {
  df <- read.csv("assignment-02-data-formated.csv")
  df$value <- as.numeric(sub("%", "", df$value, fixed=TRUE)) / 100

  output$distPlot <- renderPlot({
    # Creating a dataframe which has the coral type provided by the user only.
    df_display <- df[df$coralType == input$CoralType,]
    df_display <- df_display[df_display$location == input$Site,]

    # Plotting the new dataframe
    ggplot(data = df_display, aes(x=df_display$year, y=df_display$value, colour=df_display$location)) + 
    geom_point() +
    # Setting y axis limit
    ylim(0,1) +
    # Getting smoother type from input
    geom_smooth(se = input$ci, method = input$smooth, linetype = input$linetype) +
    labs(colour="Coral bleach locations") +
    xlab("Years") +
    ylab("Bleaching Percentage")+
    ggtitle(paste("Bleaching on", input$Site, "for", input$CoralType, "for different types", sep = " ")) +
    # Adjusting the title font and position
    theme(plot.title = element_text(hjust = 0.5, lineheight = .8, face = "bold"), legend.position = "none") 
})

  # rendering leaflet map
  output$map <- renderLeaflet({
    
                       
    m <- leaflet() %>%
    addTiles()
    # For label input if condition will be executed
    if (input$label == "label") {
      m <- m %>%addMarkers(lat = unique(df$latitude), lng = unique(df$longitude), label = unique(df$location),
               labelOptions = labelOptions(noHide = TRUE, textOnly = TRUE, textsize = input$labelsize))
    }else{
      # For circle input this condition will be executed
       m <- m %>% addCircleMarkers(lat = unique(df$latitude), lng = unique(df$longitude), group = "circles", label = unique(df$location),
                                   labelOptions = labelOptions(noHide = TRUE, textOnly = TRUE, textsize = input$labelsize))
    }
})
})
