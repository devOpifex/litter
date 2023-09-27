#' @importFrom shiny parseQueryString
datalist_endpoint <- function(data, req) {
  query <- parseQueryString(req$QUERY_STRING)

  query <- query$query

  # TODO return JSON error
  if(!length(query))
    return()

  values <- data |>
    as.character() |>
    unname()

  options <- data.frame(
    value = values,
    label = values
  )

  if(length(names(data)))
    options$label <- names(data)

  # search values
  options <- options[grepl(query, options$value) | grepl(query, options$label), ]

  options |>
    http_response_json()
}

#' @importFrom shiny httpResponse
http_response_json <- function(data, status_code = 200L) {
  httpResponse(
    status_code,
    "application/json",
    data |> serialise()
  ) 
}

