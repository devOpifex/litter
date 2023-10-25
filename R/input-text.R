#' Lit Text Input
#' 
#' Create a text input.
#' 
#' @param name Name of the input.
#' @param value Value of the input.
#' @param placeholder Placeholder text.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' @param callback A JavaScript callback functions that accepts one argument.
#' @param send_on_render Whether to send the input value on connect.
#' @param send_on Whether to send the input when the user hits the enter key or 
#'  to send it in a deferred manner.
#' 
#' @export 
litTextInput <- function(
	name = "",
	value = "", 
	placeholder = "",
	...,
	id = NULL,
  class = NULL,
  callback = NULL,
  send_on_render = TRUE,
  send_on = c("deferred", "enter")
) {
	meta <- serialise2(...)
	tag2(
		"litter-text", 
		id = id,
		name = name, 
		value = value,
		meta = meta,
		placeholder = placeholder,
    class = class,
    callback = callback,
    send_on_render = send_on_render,
    send_on = match.arg(send_on)
	)
}

