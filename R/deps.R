common_dep <- function(){
	script <- c(
		"lit.bundle.js",
		"runtime.bundle.js"
	)
	htmlDependency(
		"litter",
		version = utils::packageVersion("litter"),
		src = "assets",
		package = "litter",
		script = script
	)
}

#' Dependencies
#' 
#' @importFrom htmltools htmlDependency
#' 
#' @keywords internal
dep <- function(script){
	script_path <- sprintf("%s.bundle.js", script)

	htmlDependency(
		script,
		version = utils::packageVersion("litter"),
		src = "assets",
		package = "litter",
		script = script_path
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
		list(
			common_dep(),
			dep(script)
		)
	)
}