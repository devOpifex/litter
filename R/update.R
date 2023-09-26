#' Update inputs
#' 
#' Update inputs.
#' 
#' @param name Name of the input.
#' @param id Id of the input.
#' @param selector A CSS selector.
#' @param session A Shiny session.
#' @param ... Props to update, e.g.: `value`.
#' 
#' @details Set either of `name`, `id`, or `selector`.
#' 
#' @export 
update_input <- function(
  ...,
  name = NULL,
  id = NULL,
  selector = NULL,
  session = shiny::getDefaultReactiveDomain()
){
  session$sendCustomMessage(
    "litter-update-input",
    list(
      name = name,
      id = id,
      selector = selector,
      props = list(
        ...
      )
    )
  )
}
