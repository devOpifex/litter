<div align="center">
<!-- badges: start -->
<!-- badges: end -->

# litter

[Lit](https://lit.dev) components for shiny, with a twist.

</div>

:warning: this is an experimental work in progress.

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
		icon("cog"),
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
