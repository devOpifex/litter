#' Lit Text Input
#' 
#' Create a text input.
#' 
#' @param name Name of the input.
#' @param value Value of the input.
#' @param class Class of the button.
#' @param placeholder Label of the button.
#' @param id Id of the input.
#' @param return How to return the value to the shiny server
#' Either `instant` (not recommended), `none` or `enter`, the 
#' latter sends it on enter.
#' @param ... Passed to props.
#' 
#' @export 
litTextInput <- function(
	name,
	value = "", 
	placeholder = "",
	...,
	id = NULL,
	class = NULL,
	return = c("enter", "instant", "never")
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
		placeholder = placeholder,
		return = match.arg(return)
	)
}
