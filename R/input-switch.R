#' Lit Switch Input
#' 
#' Create a switch input.
#' 
#' @param name Name of the input.
#' @param value Value of the input.
#' @param label Label of the button.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' @param callback A JavaScript callback functions that accepts one argument.
#' 
#' @export 
litSwitchInput <- function(
	name = "",
	value = TRUE, 
	label = "",
	...,
	id = NULL,
  class = NULL,
  callback = NULL
) {
	meta <- serialise2(...)
	tag2(
		"litter-switch", 
		id = id,
		name = name, 
		value = value,
		meta = meta,
		label = label,
    class = class,
    callback = callback
	)
}


