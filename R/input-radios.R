#' Lit Radio Input
#' 
#' Create radio input.
#' 
#' @param name Name of the input.
#' @param choices List of options.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' @param value `choices` that are checked.
#' @param callback A JavaScript callback functions that accepts one argument.
#' @param send_on_render Whether to send the input value on render.
#' 
#' @importFrom htmltools tags
#' 
#' @export 
litRadioInput <- function( # nolint
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
    value <- choices[1]

  tag2(
    "litter-radios", 
    id = id,
    name = name, 
    meta = meta,
    value = value,
    class = class,
    options = as.list(choices) |> serialise(),
    callback = callback,
    send_on_render = send_on_render
  )
}
