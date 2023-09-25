#' Lit Text Area Input
#' 
#' Create a text area input.
#' 
#' @param name Name of the input.
#' @param value Value of the input.
#' @param placeholder Label of the button.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' 
#' @export 
litTextAreaInput <- function(
	name,
	value = "", 
	placeholder = "",
	...,
	id = NULL,
  class = NULL
) {
	meta <- serialise2(...)
	tag2(
		"litter-textarea", 
		id = id,
		name = name, 
		value = value,
		meta = meta,
		placeholder = placeholder,
    class = class
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
lit_text_area_input_update <- function(
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
		"litter-textarea-input",
		msg
	)	
}
