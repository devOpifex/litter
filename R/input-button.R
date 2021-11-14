#' Lit Action Button
#' 
#' Create an action button.
#' 
#' @param name Name of the input.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Class of the button.
#' @param content Content of the button, a character string
#' or valid `shiny::tags`.
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
#' @importFrom shiny tags
#' 
#' @export 
litActionButton <- function(
	name,
	content = "Click me", 
	...,
	id = NULL,
	class = NULL,
	callback = NULL
) {
	props <- serialise2(...)

	if(inherits(content, "character"))
		content <- tags$span(content)

	tag2(
		"litter-button", 
		.script = "button",
		id = id,
		class = class,
		name = name, 
		props = props,
		callback = callback,
		content
	)
}

#' Update Action Button
#' 
#' Update a action buttons.
#' 
#' @param session A valid shiny session.
#' @param selector A selector for the buttons to update.
#' @inheritParams litActionButton
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
#' @importFrom shiny tags
#' 
#' @export 
lit_action_button_update <- function(
	session,
	selector,
	...,
	content = NULL
) {
	if(!is.null(content) && inherits(content, "character"))
		content <- as.character(tags$span(content))
		
	msg <- list(
		selector = selector,
		content = content,
		props = list(...)
	)
	send_message(
		session,
		"litter-action-button",
		msg
	)	
}
