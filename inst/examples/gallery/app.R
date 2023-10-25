library(shiny)

code <- function(...){
  tags$code(...)
}

card_with_inputs <- function(i){
  tagList(
    span("Input", i, class = "text-muted fs-6"),
    litTextInput(
      name = "created", 
      class = "mb-2", 
      send_on_render = FALSE,
      n = i
    )
  )
}

ui <- fluidPage(
  theme = bslib::bs_theme(5L),
  h1("{litter}"),
  p(
    "{litter} lets multiple inputs share the same", 
    code("name"), 
    "and thus trigger the same", 
    code("input"), "server-side"
  ),
  h2("Text inputs"),
  p(
    "All text inputs trigger the same", 
    code("input"),
    "(see ouput on the right)."
  ),
  div(
    class = "row",
    div(
      class = "col-md-6",
      p(code("litTextInput")),
      litTextInput("text", class = "mb-2"),
      p(code("litTextLabelInput")),
      litTextLabelInput("text", label = "The label", class = "mb-2"),
      p(code("litTextAreaInput")),
      litTextAreaInput("text", class = "mb-2")
    ),
    div(
      class = "col-md-6",
      p("Output:"),
      verbatimTextOutput("text")
    )
  ),
  h2("Use case"),
  p(
    "Generating inputs with shiny can be painful as",
    "we have to generate", code("inputId"), 
    "and their corresponding", code("observeEvent"),
    "on the fly."
  ),
  p(
    "Not with {litter}!"
  ),
  p(
    "Below we generate inputs and pass to them", 
    code("n"),
    "as \"prop\" this is returned by the input and",
    "can be useful to distinguish between inputs:",
    "here", code("n"), "is the index of the input."
  ),
  div(
    class = "row",
    div(
      class = "col-md-6",
      litRangeInput(
        "n",
        value = 5L,
        min = 2L,
        max = 10L
      ),
      uiOutput("created")
    ),
    div(
      class = "col-md-6",
      verbatimTextOutput("createdOutput")
    )
  )
)

server <- function(input, output, session){
  output$text <- renderPrint({
    input$text
  })

  output$created <- renderUI({
    lapply(seq(input$n$value), \(x){card_with_inputs(x)})
  }) 

  output$createdOutput <- renderPrint({
    input$created
  })
}

shinyApp(ui, server)
