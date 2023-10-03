#' Lit Toggler Input
#' 
#' Create an input that is initially hidden but revealed on click.
#' This hijacks the original input which no longer sends values to the server.
#' 
#' @param name Name of the input.
#' @param display The content to display.
#' @param input The `input` to reveal.
#' @param ... Passed to props.
#' @param callback A JavaScript callback functions that accepts one argument.
#' 
#' @details This can be updated with the `feedback` argument in [update_input()]
#' as well as `accept`, a boolean to indicate whether to accept the value set.
#' 
#' @importFrom htmltools tagAppendAttributes span tagGetAttribute
#' 
#' @export 
litTogglerInput <- function(
  name,
  display,
  input,
  ...,
  callback = callback
) {
  if(is.character(display))
    display <- span(display)

	meta <- serialise2(...)

  value <- tagGetAttribute(input, "value")

	tag2(
		"litter-toggler", 
    name = name,
    value = value,
    display |>
      tagAppendAttributes(slot = "display"),
    input |>
      tagAppendAttributes(slot = "input"),
    meta = meta,
    accept = "true",
    callback = callback
	)
}


