<div align="center">
<!-- badges: start -->
<!-- badges: end -->
</div>

# litter

[Lit](https://lit.dev) components for shiny, with a twist.

## Installation

You can install the development version of litter from [GitHub](https://github.com/) with:

``` r
# install.packages("devtools")
devtools::install_github("devOpifex/litter")
```

## Example

``` r
library(shiny)
library(litter)

ui <- fluidPage(
	litActionButton(
		"btn",
		"First btn"
	),
	litActionButton(
		"btn",
		"Second btn"
	)
)

server <- function(input, output, session){
	observeEvent(input$btn, {
		print(input$btn)
	})
}

shinyApp(ui, server)
```

