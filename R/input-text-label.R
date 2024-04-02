#' Lit Text Label Input
#' 
#' Create a text input with a floating label.
#' 
#' @param name Name of the input.
#' @param label Label of the input.
#' @param value Value of the input.
#' @param placeholder Placeholder text.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param class Any additional classes.
#' @param callback A JavaScript callback functions that accepts one argument.
#' @param send_on_render Whether to send the input value on render.
#' @param send_on Whether to send the input when the user hits the enter key or 
#'  to send it in a deferred manner.
#' 
#' @export 
litTextLabelInput <- function( # nolint
  name = "",
  label,
  value = "", 
  placeholder = label,
  ...,
  id = NULL,
  class = NULL,
  callback = NULL,
  send_on_render = TRUE,
  send_on = c("deferred", "enter")
) {
  if(missing(label))
    stop("missing `label`")

  meta <- serialise2(...)
  tag2(
    "litter-textlabel", 
    id = id,
    name = name, 
    value = value,
    meta = meta,
    placeholder = placeholder,
    class = class,
    label = label,
    callback = callback,
    send_on_render = send_on_render,
    send_on = match.arg(send_on)
  )
}
