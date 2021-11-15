#' Lit Select Input
#' 
#' Create a select input.
#' 
#' @param name Name of the input.
#' @param options List of options (`name` & `value`).
#' @param id Id of the input.
#' @param ... Passed to props.
#' 
#' @importFrom htmltools tags
#' 
#' @export 
litSelectInput <- function(
	name,
	options = list(),
	...,
	id = NULL
) {
	props <- serialise2(...)

	tag2(
		"litter-select", 
		.script = "select",
		id = id,
		name = name, 
		props = props,
		lapply(options, function(opt){
			tags$option(value = opt$value, opt$name)
		})
	)
}