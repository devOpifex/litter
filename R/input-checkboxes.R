#' Lit Checkboxes Input
#' 
#' Create checkboxes input.
#' 
#' @param name Name of the input.
#' @param choices List of options.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' @param value `choices` that are checked.
#' 
#' @importFrom htmltools tags
#' 
#' @export 
litCheckboxesInput <- function(
	name = "",
	choices = list(),
	...,
	id = NULL,
  value = list(),
  class = NULL
) {
	meta <- serialise2(...)

	tag2(
		"litter-checkboxes", 
		id = id,
		name = name, 
		meta = meta,
    value = as.list(value) |> serialise(),
    class = class,
    options = as.list(choices) |> serialise()
	)
}

