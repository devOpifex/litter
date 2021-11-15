#' Lit Text Area Input
#' 
#' Create a text area input.
#' 
#' @param name Name of the input.
#' @param value Value of the input.
#' @param placeholder Label of the button.
#' @param id Id of the input.
#' @param return How to return the value to the shiny server
#' Either `instant`, or `none`.
#' @param ... Passed to props.
#' 
#' @export 
litTextAreaInput <- function(
	name,
	value = "", 
	placeholder = "",
	...,
	id = NULL,
	return = c("instant", "never")
) {
	props <- serialise2(...)
	tag2(
		"litter-textarea", 
		.script = "textarea",
		id = id,
		name = name, 
		value = value,
		props = props,
		placeholder = placeholder,
		return = match.arg(return)
	)
}

#' Update Text Input
#' 
#' Update text inputs.
#' 
#' @param session A valid shiny session.
#' @param selector A selector for the text inputs to update.
#' @param ... Passed to `props`.
#' @param value Value of the text input.
lit_text_input_update <- function(
	session,
	selector,
	...,
	value = NULL
){
	msg <- list(
		selector = selector,
		value = value,
		props = list(...)
	)
	send_message(
		session,
		"litter-text-input",
		msg
	)	
}
