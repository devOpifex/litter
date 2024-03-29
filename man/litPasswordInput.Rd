% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/input-password.R
\name{litPasswordInput}
\alias{litPasswordInput}
\title{Lit Password Input}
\usage{
litPasswordInput(
  name = "",
  value = "",
  placeholder = "",
  ...,
  id = NULL,
  class = NULL,
  callback = NULL,
  send_on_render = TRUE,
  send_on = c("deferred", "enter")
)
}
\arguments{
\item{name}{Name of the input.}

\item{value}{Value of the input.}

\item{placeholder}{Placeholder text.}

\item{...}{Passed to props.}

\item{id}{Id of the input.}

\item{class}{Any additional classes.}

\item{callback}{A JavaScript callback functions that accepts one argument.}

\item{send_on_render}{Whether to send the input value on render.}

\item{send_on}{Whether to send the input when the user hits the enter key or
to send it in a deferred manner.}
}
\description{
Create a password input.
}
