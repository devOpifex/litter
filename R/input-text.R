#' Lit Text Input
#' 
#' Create a text input.
#' Note that the value is sent to the server on enter.
#' (when the input is focused).
#' 
#' @param name Name of the input.
#' @param value Value of the input.
#' @param class Class of the button.
#' @param placeholder Label of the button.
#' @param id Id of the input.
#' @param ... Passed to props.
#' 
#' @export 
litTextInput <- function(
	name,
	value = "", 
	placeholder = "",
	...,
	id = NULL,
	class = NULL
) {
	props <- serialise2(...)
	tag2(
		"text-input", 
		.script = "text",
		id = id,
		class = class,
		name = name, 
		value = value,
		props = props,
		placeholder = placeholder
	)
}
