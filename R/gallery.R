#' Gallery
#' 
#' Demo of inputs.
#' 
#' @export
gallery <- function(){
  shiny::shinyAppDir(
    system.file(
      "examples/gallery", 
      package = "litter", 
      mustWork = TRUE
    )
  )
}
