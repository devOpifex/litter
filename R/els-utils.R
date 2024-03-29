#' Custom Tag
#' 
#' Create a custom tag.
#' 
#' @param .name Name of the tag.
#' @param ... Tag attributes (named).
#' 
#' @importFrom htmltools tag
#' 
#' @keywords internal
tag2 <- function(.name, ..., .script = NULL){
  if(is.null(.script))
    .script <- gsub(".*-", "", .name)

	attach_dep(tag(.name, list(...)), script = .script)
}
