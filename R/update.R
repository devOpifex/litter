#' Update inputs
#' 
#' Update inputs.
#' 
#' @param name Name of the input.
#' @param id Id of the input.
#' @param selector A CSS selector.
#' @param session A Shiny session.
#' @param ... Props to update, e.g.: `value`.
#' @param choices Vector (optionally named) of options.
#' 
#' @details Set either of `name`, `id`, or `selector`.
#' 
#' @name update_input
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

#' @rdname update_input
#' @export 
update_datalist_input <- function(
  choices,
  ...,
  name = NULL,
  id = NULL,
  selector = NULL,
  session = shiny::getDefaultReactiveDomain()
){
  path <- session$registerDataObj(
    make_endpoint_name(name, id, selector),
    choices,
    datalist_endpoint
  )

  update_input(
    ...,
    endpoint = path,
    name = name,
    id = id,
    selector = selector,
    session = shiny::getDefaultReactiveDomain()
  )
}
