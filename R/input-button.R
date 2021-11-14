#' Lit Action Button
#' 
#' Create an action button.
#' 
#' @param name Name of the input.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Class of the button.
#' @param label Label of the button.
#' @param callback Callback function to run on click
#' if `NULL` then the value is sent to the server.
#' Otherwise a JavaScript callback function that accepts
#' the instance of the button class (e.g.: `this`).
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
	class = NULL,
	callback = NULL
) {
	props <- serialise2(...)
	tag2(
		"action-button", 
		.script = "button",
		id = id,
		class = class,
		name = name, 
		label = label, 
		props = props,
		callback = callback
	)
}

#' Update Action Button
#' 
#' Update a action buttons.
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
