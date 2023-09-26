make_options <- function(choices) {
  nms <- names(choices)

  if(is.null(nms))
    nms <- choices

  lapply(seq(choices), \(i) {
    list(label = nms[i], value = choices[i])
  })
}

