---
title: "Get Started"
---

Get Started
===========

An example of using {litter} for buttons.

In {litter} inputs do not take an `inputId`,
instead they accept a `name`.
Where an `inputId` must be unique a `name` can be shared
by multiple outputs.

```r 
library(shiny)
library(litter)

ui <- fluidPage(
  theme = bslib::bs_theme(5L),
  litActionButton(
    name = "btn",
    "Button #1"
  ),
  litActionButton(
    name = "btn",
    "Button #2"
  )
)

server <- function(input, output, session){
  observeEvent(input$btn, {
    print(input$btn)
  })
}

shinyApp(ui, server)
```

This allows managing multiple inputs frpom a single observer.
