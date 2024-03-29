% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/input-selectize.R
\name{litSelectizeInput}
\alias{litSelectizeInput}
\title{Lit Selectize Input}
\usage{
litSelectizeInput(
  name = "",
  choices = list(),
  ...,
  id = NULL,
  value = list(),
  class = NULL,
  callback = NULL,
  send_on_render = TRUE
)
}
\arguments{
\item{name}{Name of the input.}

\item{choices}{List of options.}

\item{...}{Passed to props.}

\item{id}{Id of the input.}

\item{value}{Value of the input.}

\item{class}{Any additional classes.}

\item{callback}{A JavaScript callback functions that accepts one argument.}

\item{send_on_render}{Whether to send the input value on render.}
}
\description{
Create a selectize input.
}
