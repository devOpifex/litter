---
title: Update
---

Update
======

All inputs can be updated with `update_input`.

```r
library(shiny)
library(litter)

ui <- fluidPage(
  theme = bslib::bs_theme(5L),
  span("Type", tags$code("error"), "below"),
  litTextInput(
    name = "txt"
  )
)

server <- function(input, output){
  observeEvent(input$txt, {
    if(input$txt$value == ""){
      update_input(name = "txt", class = "")
      return()
    }

    if(input$txt$value == "error"){
      update_input(name = "txt", class = "is-invalid")
      return()
    }

    update_input(name = "txt", class = "is-valid")
  })
}

shinyApp(ui, server)
```
