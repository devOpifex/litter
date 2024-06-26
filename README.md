<div align="center">
<!-- badges: start -->
<!-- badges: end -->

<img src="inst/logo.png" width=250 />

[Lit](https://lit.dev) components for shiny, with a twist.

</div>

## Inputs

Currently implemented inputs:

- `litActionButton`
- `litActionLink`
- `litCheckboxesInput`
- `litColorInput`
- `litDatalistInput`
- `litFilterInput`
- `litPasswordInput`
- `litTextInput`
- `litTextAreaInput`
- `litRadioInput`
- `litSwitchInput`
- `litTextLabelInput`
- `litTogglerInput`
- `litRangeInput`
- `litSelectInput`
- `litSelectizeInput`

## Limitations

- Only works with bslib's Bootstrap 5.
- These inputs are not captured by Shiny's bookmarking session
- These inputs are not captured by [shinytest2](https://rstudio.github.io/shinytest2/)

These limitations are unlikely to be lifted in the future.

## Installation

You can install the development version of litter from [GitHub](https://github.com/) with:

``` r
# install.packages("remotes")
remotes::install_github("devOpifex/litter")
```

## Example

{litter} allows using multiple inputs with a single observer.

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

## Conventions

- All input functions start in `lit`.
- All inputs have a `value` (even if it can be a vector of multiple values)
- All inputs can be updated with `update_input`
- All inputs accept a `callback` argument (Javascript function)
- Labels are not part of the input
- All inputs accept a `send_on_render` argument
- All inputs return data in the same format:

```r
list(
  props = list(),
  id = "", # omitted if not set
  value = 1L
)
```

## Properties

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

## Callback

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

## Update

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

## Generate

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

## Styling

All styling is taken from bslib's set theme as well as the `class` argument of 
all inputs.

