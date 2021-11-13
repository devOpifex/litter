send_message <- function(
	session,
	.type,
	.data
) {
	session$sendCustomMessage(
		.type,
		.data
	)
}

#' Select Inputs
#' 
#' Create a selector for an input.
#' 
#' @param name Name of the input.
#' 
#' @export 
select_inputs <- function(name){
	invisible(sprintf("[name='%s']", name))
}
