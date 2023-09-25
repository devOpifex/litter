#' Lit Action Button
#' 
#' Create an action button.
#' 
#' @param name Name of the input.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param content Content of the button, a character string
#' or valid `shiny::tags`.
#' @param class Any additional classes.
#' @param value Value of the input.
#' 
#' @examples 
#' library(shiny)
#' 
#' ui <- fluidPage(
#' 	litActionButton(
#' 		"btn",
#' 		"First btn"
#' 	),
#' 	litActionButton(
#' 		"btn",
#' 		"Second btn"
#' 	)
#' )
#' 
#' server <- function(input, output, session){
#' 	observeEvent(input$btn, {
#' 		print(input$btn)
#' 	})
#' }
#' 
#' if(interactive())
#' 	shinyApp(ui, server)
#' 
#' @importFrom shiny tags
#' 
#' @export 
litActionButton <- function(
	name,
	content = "Click me", 
	...,
	id = NULL,
  class = NULL,
  value = NULL
) {
	meta <- serialise2(...)

	if(inherits(content, "character"))
		content <- tags$span(content)

	tag2(
		"litter-button", 
		id = id,
		name = name, 
		meta = meta,
    class = class,
    value = value,
		content
	)
}

