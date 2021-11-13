#' Dependencies
#' 
#' @importFrom htmltools htmlDependency
#' 
#' @keywords internal
dep <- function(script){
	htmlDependency(
		"litter",
		version = utils::packageVersion("litter"),
		src = "",
		package = "litter",
		script = script
	)
}

#' Attach Dependencies
#' 
#' Attach dependencies to a tag.
#' 
#' @param tag Tag to attach the dependencies to.
#' 
#' @importFrom htmltools attachDependencies
#' 
#' @keywords internal
attach_dep <- function(tag, script) {
	attachDependencies(
		tag,
		dep(script)
	)
}