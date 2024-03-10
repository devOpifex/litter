---
title: Generate
---

Generate
========

An example of generating inputs with {litter}.

```r
library(shiny)
library(litter)

ui <- fluidPage(
  theme = bslib::bs_theme(5L),
  litRangeInput(
    "n",
    value = 5,
    min = 3,
    max = 10
  ),
  uiOutput("created"),
  verbatimTextOutput("result")
)

server <- function(input, output, session) {
  output$created <- renderUI({
    # we create n input
    lapply(seq(input$n$value), \(x){
      div(
        class = "mb-1",
        span("Input", x),
        # all inputs have the same name
        litTextInput(
          name = "text",
          n = x,
          send_on_render = FALSE
        )
      )
    })
  })

  output$result <- renderPrint({
    print(input$text)
  })
}

shinyApp(ui, server, options = list(port = 3000L))
```
