#' Lit Action Link
#' 
#' Create an action button.
#' 
#' @param name Name of the input.
#' @param id Id of the input.
#' @param ... Passed to props.
#' @param content Content of the button, a character string
#' or valid `shiny::tags`.
#' @param class Any additional classes.
#' @param value Value of the input.
#' @param callback A JavaScript callback functions that accepts one argument.
#' @param send_on_render Whether to send the input value on render.
#' 
#' @examples 
#' library(shiny)
#' 
#' ui <- fluidPage(
#'  litActionLink(
#'    "btn",
#'    "First btn"
#'  ),
#'  litActionLink(
#'    "btn",
#'    "Second btn"
#'  )
#' )
#' 
#' server <- function(input, output, session){
#'  observeEvent(input$btn, {
#'    print(input$btn)
#'  })
#' }
#' 
#' if(interactive())
#'  shinyApp(ui, server)
#' 
#' @importFrom shiny tags
#' 
#' @export 
litActionLink <- function( # nolint
  name = "",
  content = "Click me", 
  ...,
  id = NULL,
  class = NULL,
  value = NULL,
  callback = NULL,
  send_on_render = FALSE
) {
  meta <- serialise2(...)

  if(inherits(content, "character"))
    content <- tags$span(content)

  tag2(
    "litter-link", 
    id = id,
    name = name, 
    meta = meta,
    class = class,
    value = value,
    callback = callback,
    send_on_render = send_on_render,
    content
  )
}
