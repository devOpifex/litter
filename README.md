<div align="center">
<!-- badges: start -->
<!-- badges: end -->

# litter

[Lit](https://lit.dev) components for shiny, with a twist.

</div>

## Rationale

As much as we love the shiny web framework, one great limitation
is how inputs are processed. Inputs are set given an `inputId` 
which directly translates to an `id` in the generated HTML.

This means inputs can only be created individually, one function
call creates a single input as this `id`s in HTML have to be unique.
This makes it's difficult to dynamically.

Also, because of the latter, one can only `observe` individual
inputs as opposed to observing changes in many inputs at once.

This project takes inspiration from vanilla JavaScript where one can
observe on any valid selector such as a `.class`
(as opposed to shiny which can only observe on `#id`), this means
one can have a single `observe` for multiple inputs.

This project implements something similar for shiny by allowing
users to create inputs that, instead of `inputId`, take
a `name` argument which __can be shared by multiple inputs__. 
This makes it is possible to sensibly use
dynamically generated inputs in R as well as open the door
to many other opportunities.

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

This makes it easier to work with generated inputs.

## Conventions

- All input functions start in `lit`.
- All inputs have a `value` (even if it can be a vector)
- All inputs can be updated with `update_input`
- All inputs return data in the same format:
- All inputs accept a `callback` argument: Javascript callback function
- All inputs return the same data structure
- Labels are not part of the input

```r
list(
  props = list(),
  id = "", # omitted if not set
  value = 1L
)
```

## Props

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

## Styling

All styling is taken from bslib's set theme.

