handler_parse <- function(data, ...){
	data$props <- jsonlite::fromJSON(data$props)
	return(data)
}

# This will error
# register with shiny
shiny::registerInputHandler("litter.parse", handler_parse, force = TRUE)
