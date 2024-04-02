#' Lit Filter Input
#' 
#' Create a filter input.
#' 
#' @param name Name of the input.
#' @param dataset Dataset to retrieve variables.
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
litFilterInput <- function( # nolint
  name = "",
  ...,
  dataset = NULL,
  id = NULL,
  value = NULL,
  class = NULL,
  callback = NULL,
  send_on_render = TRUE
) {
  meta <- serialise2(...)

  if(!is.null(dataset))
    dataset <- dataset |> get_variables()

  if(is.null(dataset))
    dataset <- list()

  tag2(
    "litter-filter", 
    dataset = dataset |> serialise(),
    id = id,
    name = name, 
    meta = meta,
    value = value,
    class = class,
    callback = callback,
    send_on_render = send_on_render
  )
}

get_variables <- function(data){
  lapply(seq_along(data), \(i){
    variable <- get_data(data[[i]])
    variable$name <- names(data)[i]
    return(variable)
  }) |> 
    unname()
}

get_data <- function(x){
  UseMethod("get_data")
}

#' @method get_data default
#' @export
get_data.default <- function(x){
  list(
    type = "character",
    label = attr(x, "label"),
    value = "",
    description = attr(x, "description")
  )
}

#' @method get_data numeric
#' @export
get_data.numeric <- function(x){
  list(
    min = min(x),
    max = max(x),
    step = get_step(x),
    type = "numeric",
    label = attr(x, "label"),
    value = min(x),
    description = attr(x, "description")
  )
}

#' @method get_data Date
#' @export
get_data.Date <- function(x){
  list(
    min = min(x),
    max = max(x),
    type = "date",
    label = attr(x, "label"),
    vakue = min(x),
    description = attr(x, "description")
  )
}

#' @method get_data POSIXct
#' @export
get_data.POSIXct <- function(x){
  list(
    min = min(x),
    max = max(x),
    type = "datetime",
    label = attr(x, "label"),
    value = min(x),
    description = attr(x, "description")
  )
}

#' @method get_data factor
#' @export
get_data.factor <- function(x){
  levels <- x |> factor() |> unique() |> unname()

  list(
    values = levels,
    type = "factor",
    label = attr(x, "label"),
    value = levels[1],
    description = attr(x, "description")
  )
}

#' @method get_data logical
#' @export
get_data.logical <- function(x){
  list(
    values = c(TRUE, FALSE),
    type = "logical",
    label = attr(x, "label"),
    value = c(TRUE, FALSE),
    description = attr(x, "description")
  )
}

get_step <- function(x){
  diff <- max(x) - min(x)

  if(diff < 1)
    return(.1)

  if(diff > 1000)
    return(5L)

  return(1L)
}
