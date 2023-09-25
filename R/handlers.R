handler_parse <- function(data, ...){
	data$meta <- jsonlite::fromJSON(data$meta)
	return(data)
}

# This will error
# register with shiny
.onLoad <- function(...) {
	shiny::registerInputHandler("litter.parse", handler_parse, force = TRUE)
}
