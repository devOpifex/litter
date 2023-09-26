#' Lit Datalist Input
#' 
#' Create a datalist input.
#' 
#' @param name Name of the input.
#' @param choices List of options.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' @param value Value of the input.
#' @param placeholder Placeholder value.
#' 
#' @importFrom htmltools tags
#' 
#' @export 
litDatalistInput <- function(
	name,
	choices = list(),
	...,
	id = NULL,
  value = NULL,
  class = NULL,
  placeholder = NULL
) {
	meta <- serialise2(...)

	tag2(
		"litter-datalist", 
		id = id,
		name = name, 
		meta = meta,
    value = value,
    class = class,
    options = make_options(choices) |> serialise(),
    placeholder = placeholder
	)
}


