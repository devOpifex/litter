make_options <- function(choices) {
  nms <- names(choices)

  if(is.null(nms))
    nms <- choices

  lapply(seq(choices), \(i) {
    list(label = nms[i], value = choices[i])
  })
}

get_first_option <- function(choices) {
  return(choices[1])
}

make_endpoint_name <- function(
  name = NULL,
  id = NULL,
  selector = NULL
){
  if(!is.null(name))
    return(endpoint_name(name))

  if(!is.null(id))
    return(endpoint_name(id))

  gsub("^[[:punct:]]", "", selector) |>
    endpoint_name()
}

endpoint_name <- function(name) {
  sprintf(
    "litter-endpoint-%s",
    name
  )
}
