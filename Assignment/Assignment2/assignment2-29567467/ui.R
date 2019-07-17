# FIT5147 : Data exploration and visualistion S1 2019
# Name : Roopak Thiyyathuparambil Jayachandran
# StudentId : 29567467
# Tutor : Joy Zhao

# Part 3: Shiny application for interactive visualisation varying the type of coral and smoothers applied
# ui.R file defines the structure of page
library(shiny)
# Define UI for application that draws a histogram
shinyUI(fluidPage(
  # Setting the application and window title
  titlePanel("Coral Bleaching on Different Sites",windowTitle = "Coral Bleaching"),
  # Side bar having the following control panels:
  # Drop down : To select the type of coral
  # Drop down : To select the site location
  # Drop down : To select the type of smoothers
  # Slider : To select the smoother line type
  # Checkbox : Option to have confidence interval
  # DropDown : To select between label and circle in map
  # RadioButton : To select the size of the label
  sidebarLayout(
    sidebarPanel(
      selectInput("CoralType",
                  "Choose the type of Coral",
                  choices = c("blue corals",
                              "hard corals",
                              "sea fans",
                              "sea pens",
                              "soft corals"),
                  selected = "sea fans"),
      
      selectInput("Site",
                  "Choose the site for the Coral",
                  choices = c("site01",
                              "site02",
                              "site03",
                              "site04",
                              "site05",
                              "site06",
                              "site07",
                              "site08"),
                  selected = "site01"),
      
      selectInput(inputId = "smooth",
                  label = "Select the type of smoother",
                  choices = c("lm", "gam", "loess", "auto"),
                  selected = "loess"),
      
      sliderInput("linetype",
                  label = "Select the line type",
                  min = 1,
                  max = 4,
                  value = 1),
      checkboxInput("ci",
                    label = "Do you want confidence interval",
                    value = FALSE),
      selectInput(inputId = "label",
                  label = "Select label or circles",
                  choices = c("label", "circle"),
                  selected = "label"),
      radioButtons(inputId = "labelsize",
                  label = "Select the size of label",
                  choices = c("10px", "15px", "20px"),
                  selected = "10px")
    ),
    
    # Show a plot of the generated distribution and a map of site locations in different tabs
    mainPanel(
      tabsetPanel(
        tabPanel("Plot", plotOutput("distPlot")), 
        tabPanel("Map", leafletOutput("map"))
      )
    )
  )
))