#' Action Button
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
lActionButton <- function(
	name,
	label = "Click me", 
	...,
	id = NULL,
	class = NULL
) {
	props <- serialise2(...)
	tag2(
		"action-button", 
		.script = "button.js",
		id = id,
		class = class,
		name = name, 
		label = label, 
		props = props
	)
}

update_action_button <- function(
	session,
	selector,
	...
) {
	msg <- list(
		selector = selector,
		props = list(...)
	)
	send_message(
		session,
		"litter-action-button",
		msg
	)	
}
