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
#' @param callback A JavaScript callback functions that accepts one argument.
#' @param send_on_render Whether to send the input value on render.
#' 
#' @importFrom htmltools tags
#' 
#' @export 
litSelectInput <- function( # nolint
  name = "",
  choices = list(),
  ...,
  id = NULL,
  value = NULL,
  class = NULL,
  callback = NULL,
  send_on_render = TRUE
) {
  meta <- serialise2(...)

  if(is.null(value))
    value <- get_first_option(choices)

  tag2(
    "litter-select", 
    id = id,
    name = name, 
    meta = meta,
    value = value,
    class = class,
    options = make_options(choices) |> serialise(),
    callback = callback,
    send_on_render = send_on_render
  )
}
