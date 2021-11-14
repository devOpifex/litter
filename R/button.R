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
