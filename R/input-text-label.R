#' Lit Text Label Input
#' 
#' Create a text input with a floating label.
#' 
#' @param name Name of the input.
#' @param label Label of the input.
#' @param value Value of the input.
#' @param placeholder Placeholder text.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' @param callback A JavaScript callback functions that accepts one argument.
#' 
#' @export 
litTextLabelInput <- function(
	name = "",
	value = "", 
  label = "",
	placeholder = label,
	...,
	id = NULL,
  class = NULL,
  callback = NULL
) {
	meta <- serialise2(...)
	tag2(
		"litter-textlabel", 
		id = id,
		name = name, 
		value = value,
		meta = meta,
		placeholder = placeholder,
    class = class,
    label = label,
    callback = callback
	)
}


