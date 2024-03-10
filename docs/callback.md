---
title: Callback
---

Callback
======

You can pass a JavaScript callback function,
in which case it is called instead of sending the value
to the shiny server.

```r
library(shiny)
library(litter)

ui <- fluidPage(
  theme = bslib::bs_theme(5L),
  litActionButton(
    callback = "() => {alert('Hello!')}"
  )
)

server <- function(...){}

shinyApp(ui, server)
```
