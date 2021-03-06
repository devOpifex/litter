#' Lit Range Input
#' 
#' Create a range input.
#' 
#' @param name Name of the input.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param min,max,value Minimum, maximum, and initial value
#' of the range.
#' @param step Incremental steps the range must take.
#' 
#' @examples 
#' library(shiny)
#' 
#' ui <- fluidPage(
#' 	 litRangeInput("range")
#' )
#' 
#' server <- function(input, output, session){
#'   observeEvent(input$range, {
#'     print(input$range)
#'   })
#' }
#' 
#' if(interactive())
#'   shinyApp(ui, server)
#' 
#' @importFrom shiny tags
#' 
#' @export 
litRangeInput <- function(
	name,
	...,
	id = NULL,
	min = NULL,
	max = NULL,
	step = NULL,
	value = NULL
) {
	props <- serialise2(...)

	tag2(
		"litter-range", 
		.script = "range",
		id = id,
		name = name,
		min = min,
		max = max,
		step = step,
		value = value,
		props = props
	)
}
