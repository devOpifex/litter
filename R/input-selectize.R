#' Lit Selectize Input
#' 
#' Create a selectize input.
#' 
#' @param name Name of the input.
#' @param choices List of options.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' @param value Value of the input.
#' @param callback A JavaScript callback functions that accepts one argument.
#' 
#' @importFrom htmltools tags
#' 
#' @export 
litSelectizeInput <- function(
	name = "",
	choices = list(),
	...,
	id = NULL,
  value = list(),
  class = NULL,
  callback = ""
) {
	meta <- serialise2(...)

  if(is.null(value))
    value <- get_first_option(choices)

	tag2(
		"litter-selectize", 
		id = id,
		name = name, 
		meta = meta,
    value = value,
    class = class,
    options = make_options(choices) |> serialise(),
    callback = callback
	)
}

