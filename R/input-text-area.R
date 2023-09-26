#' Lit Text Area Input
#' 
#' Create a text area input.
#' 
#' @param name Name of the input.
#' @param value Value of the input.
#' @param placeholder Placeholder text.
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

