#' @import assertthat
not_missing <- function(x){
  !missing(x)
}

on_failure(not_missing) <- function(call, env){
  sprintf("`%s` is missing", deparse(call$x))
}

one_set <- function(x, y, z) {
  v <- c(x, y, z)
  length(v) == 1L
}

on_failure <- function(call, env) {
  sprintf(
    "at least one must be set: (`%s`, `%s`, `%s`)",
    deparse(call$x),
    deparse(call$y),
    deparse(call$z)
  )
}
