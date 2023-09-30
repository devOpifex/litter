#' Lit Color Input
#' 
#' Create a color input.
#' 
#' @param name Name of the input.
#' @param value Value of the input.
#' @param placeholder Placeholder text.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' 
#' @export 
litColorInput <- function(
	name = "",
	value = "", 
	placeholder = "",
	...,
	id = NULL,
  class = NULL
) {
	meta <- serialise2(...)
	tag2(
		"litter-color", 
		id = id,
		name = name, 
		value = value,
		meta = meta,
		placeholder = placeholder,
    class = class
	)
}


