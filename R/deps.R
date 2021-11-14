#' Dependencies
#' 
#' @importFrom htmltools htmlDependency
#' 
#' @keywords internal
dep <- function(script){
	script <- sprintf("%s.bundle.js", script)

	# add common
	script <- c(
		"lit.bundle.js",
		"runtime.bundle.js",
		script
	)

	script <- paste0("assets/", script)

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