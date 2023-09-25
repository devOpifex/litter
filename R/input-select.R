#' Lit Select Input
#' 
#' Create a select input.
#' 
#' @param name Name of the input.
#' @param choices List of options.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' @param value Value of the input.
#' 
#' @importFrom htmltools tags
#' 
#' @export 
litSelectInput <- function(
	name,
	choices = list(),
	...,
	id = NULL,
  value = NULL,
  class = NULL
) {
	meta <- serialise2(...)

	tag2(
		"litter-select", 
		id = id,
		name = name, 
		meta = meta,
    value = value,
    class = class,
    options = make_options(choices) |> serialise()
	)
}

make_options <- function(choices) {
  nms <- names(choices)

  if(is.null(nms))
    nms <- choices

  lapply(seq(choices), \(i) {
    list(label = nms[i], value = choices[i])
  })
}

