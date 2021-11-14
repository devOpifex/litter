#' Lit Action Button
#' 
#' Create an action button.
#' 
#' @param name Name of the input.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Class of the button.
#' @param label Label of the button.
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
#' @export 
litActionButton <- function(
	name,
	label = "Click me", 
	...,
	id = NULL,
	class = NULL
) {
	props <- serialise2(...)
	tag2(
		"action-button", 
		.script = "button",
		id = id,
		class = class,
		name = name, 
		label = label, 
		props = props
	)
}

#' Update Action Button
#' 
#' Update an action button.
#' 
#' @param session A valid shiny session.
#' @param selector A selector for the buttons to update.
#' @param ... Passed to `props`.
#' @param label Label of the action button.
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
#' 	),
#' 	litActionButton(
#' 		"update",
#' 		"Parent"
#' 	)
#' )
#' 
#' server <- function(input, output, session){
#' 	observeEvent(input$btn, {
#' 		print(input$btn)
#' 	})
#' 
#' 	observeEvent(input$update, {
#' 		lit_action_button_update(
#' 			session,
#' 			selector = select_inputs("btn"),
#' 			label = "LABEL",
#' 			x = 1
#' 		)
#' 	})
#' }
#' 
#' if(interactive())
#' 	shinyApp(ui, server)
#' 
#' @export 
lit_action_button_update <- function(
	session,
	selector,
	...,
	label = NULL
) {
	msg <- list(
		selector = selector,
		label = label,
		props = list(...)
	)
	send_message(
		session,
		"litter-action-button",
		msg
	)	
}
