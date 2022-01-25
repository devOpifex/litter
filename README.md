<div align="center">
<!-- badges: start -->
<!-- badges: end -->

# litter

[Lit](https://lit.dev) components for shiny, with a twist.

</div>

:warning: this is an experiment out here for feedback

## Rationale

As much as we love the shiny web framework, one great limitation
is how inputs are processed. Inputs are set given an `inputId` 
which directly translated to `id` in the generated HTML.

This means inputs can only be created individually, one function
call creates a single input, it's difficult to dynamically generate
inputs.

Also, because of the latter, one can only `observe` individual
inputs as opposed to multiple ones. Of course, one could wrap
multiple inputs in a `reactive` and then observe changes on said
`reactive`, but that does not work well (if at all) for dynamically
generated inputs.

This project takes inspiration from vanilla JavaScript one can
observe on any valid selector such as a `.class`
(as opposed to shiny which can only observe on `#id`), this means
one can have a single `observe` for multiple inputs.

This project implements something similar for shiny by allowing
users to create inputs that, instead of `inputId`, take
and `inputClass` argument which directly passed to the HTML
`class` attribute. This makes it possible to sensibly use
dynamically generated inputs in R as well as open the door
to many other opportunities.

It seems promising but there are questions on the implementation:
it currently uses lit for convenience but requires 
re-programming all inputs that shiny currently offers.

__This is public for feedback__

## Installation

You can install the development version of litter from [GitHub](https://github.com/) with:

``` r
# install.packages("devtools")
devtools::install_github("devOpifex/litter")
```

## Example

{litter} allows using multiple inputs with a single observer.

``` r
library(shiny)
library(litter)

ui <- fluidPage(
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
