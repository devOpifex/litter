#' Serialiser
#' 
#' @param data Data to serialise
#' 
#' @importFrom jsonlite toJSON
#' 
#' @keywords internal
serialise <- function(data){
  toJSON(
    data,
    dataframe = "rows",
    auto_unbox = TRUE
  )
}

#' @keywords internal
serialise2 <- function(...){
  toJSON(
    list(...),
    dataframe = "rows",
    auto_unbox = TRUE
  )
}
