make_options <- function(choices) {
  nms <- names(choices)

  if(is.null(nms))
    nms <- choices

  lapply(seq(choices), \(i) {
    list(label = nms[i], value = choices[i])
  })
}

get_first_option <- function(choices) {
  if(length(choices) == 0L)
    return(list())

  return(choices[1])
}

make_endpoint_name <- function(
  base,
  name = NULL,
  id = NULL,
  selector = NULL
){
  if(!is.null(name))
    return(endpoint_name(name, base))

  if(!is.null(id))
    return(endpoint_name(id, base))

  gsub("^[[:punct:]]", "", selector) |>
    endpoint_name(base)
}

endpoint_name <- function(name, base) {
  sprintf(
    "litter-endpoint-%s-%s",
    base,
    name
  )
}
