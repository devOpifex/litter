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
#' @param callback A JavaScript callback functions that accepts one argument.
#' @param send_on_render Whether to send the input value on render.
#' 
#' @importFrom htmltools tags
#' 
#' @details Can be server-side rendered with [update_datalist_input()].
#' 
#' @seealso [update_datalist_input()]
#' 
#' @export 
litDatalistInput <- function(
	name = "",
	choices = list(),
	...,
	id = NULL,
  value = NULL,
  class = NULL,
  placeholder = NULL,
  callback = NULL,
  send_on_render = TRUE
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
    placeholder = placeholder,
    callback = callback,
    send_on_render = send_on_render
	)
}

