% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/update.R
\name{update_input}
\alias{update_input}
\alias{update_datalist_input}
\alias{update_selectize_input}
\alias{update_filter_input}
\title{Update inputs}
\usage{
update_input(
  ...,
  name = NULL,
  id = NULL,
  selector = NULL,
  session = shiny::getDefaultReactiveDomain()
)

update_datalist_input(
  choices,
  ...,
  name = NULL,
  id = NULL,
  selector = NULL,
  session = shiny::getDefaultReactiveDomain()
)

update_selectize_input(
  choices,
  ...,
  name = NULL,
  id = NULL,
  selector = NULL,
  session = shiny::getDefaultReactiveDomain()
)

update_filter_input(
  dataset,
  ...,
  name = NULL,
  id = NULL,
  selector = NULL,
  session = shiny::getDefaultReactiveDomain()
)
}
\arguments{
\item{...}{Props to update, e.g.: \code{value}.}

\item{name}{Name of the input.}

\item{id}{Id of the input.}

\item{selector}{A CSS selector.}

\item{session}{A Shiny session.}

\item{choices}{Vector (optionally named) of options.}

\item{dataset}{Dataset to update \code{\link[=litDatalistInput]{litDatalistInput()}}}
}
\description{
Update inputs.
}
\details{
Set either of \code{name}, \code{id}, or \code{selector}.
The function \code{\link[=update_datalist_input]{update_datalist_input()}} is used to server-side
render the options.
}
