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
#' 
#' @export 
litSwitchInput <- function(
	name,
	value = TRUE, 
	label = "",
	...,
	id = NULL,
  class = NULL
) {
	meta <- serialise2(...)
	tag2(
		"litter-switch", 
		id = id,
		name = name, 
		value = value,
		meta = meta,
		label = label,
    class = class
	)
}


