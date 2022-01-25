handler_parse <- function(data, ...){
	data$props <- jsonlite::fromJSON(data$props)
	return(data)
}

# This will error
# register with shiny
.onLoad <- function(...) {
	shiny::registerInputHandler("litter.parse", handler_parse, force = TRUE)
}
