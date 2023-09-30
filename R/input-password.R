#' Lit Password Input
#' 
#' Create a password input.
#' 
#' @param name Name of the input.
#' @param value Value of the input.
#' @param placeholder Placeholder text.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' 
#' @export 
litPasswordInput <- function(
	name = "",
	value = "", 
	placeholder = "",
	...,
	id = NULL,
  class = NULL
) {
	meta <- serialise2(...)
	tag2(
		"litter-password", 
		id = id,
		name = name, 
		value = value,
		meta = meta,
		placeholder = placeholder,
    class = class
	)
}


