---
title: Props
---

Properties
==========

Whilst inputs that share `name` trigger the same input it can be difficult to 
distinguish between inputs.

For this you can pass any "prop" to the three dot construct `...`.
For example, the application below will return the values set to `myProp`
to `input$btn`.

```r
library(shiny)
library(litter)

ui <- fluidPage(
  theme = bslib::bs_theme(5L),
  litActionButton(
    name = "btn",
    "Button #1",
    myProp = "A"
  ),
  litActionButton(
    name = "btn",
    "Button #2",
    myProp = "B"
  )
)

server <- function(input, output, session){
  observeEvent(input$btn, {
    print(input$btn)
  })
}

shinyApp(ui, server)
```
