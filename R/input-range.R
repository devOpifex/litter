#' Lit Range Input
#' 
#' Create a range input.
#' 
#' @param name Name of the input.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param min,max,value Minimum, maximum, and initial value
#' of the range.
#' @param step Incremental steps the range must take.
#' @param class Any additional classes.
#' @param callback A JavaScript callback functions that accepts one argument.
#' @param send_on_render Whether to send the input value on render.
#' 
#' @examples 
#' library(shiny)
#' 
#' ui <- fluidPage(
#'   litRangeInput("range")
#' )
#' 
#' server <- function(input, output, session){
#'   observeEvent(input$range, {
#'     print(input$range)
#'   })
#' }
#' 
#' if(interactive())
#'   shinyApp(ui, server)
#' 
#' @importFrom shiny tags
#' 
#' @export 
litRangeInput <- function( # nolint
  name = "",
  ...,
  id = NULL,
  min = 0L,
  max = 10L,
  step = NULL,
  value = NULL,
  class = NULL,
  callback = NULL,
  send_on_render = TRUE
) {
  meta <- serialise2(...)

  tag2(
    "litter-range", 
    id = id,
    name = name,
    min = min,
    max = max,
    step = step,
    value = value,
    meta = meta,
    class = class,
    callback = callback,
    send_on_render = send_on_render
  )
}
