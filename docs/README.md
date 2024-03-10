---
title: "Home"
---

Welcome to {litter}
=============

As much as we love the [shiny](https://shiny.posit.co/) 
web framework, one great limitation
is how inputs are handled. Inputs are set given an `inputId` 
which directly translates to an `id` in the generated HTML.

This means every input must be unique which
makes it's difficult to dynamically generate inputs.
Whilst manageable UI-side with a simple loop it makes a mess server-side as one has
to dynamically create and destroy observers.

This project takes inspiration from vanilla JavaScript where one can
"observe" on any valid selector such as a <code>.class</code>
(as opposed to shiny which can only observe on <code>#id</code>), this means
one can have a single <code>observe</code> for multiple inputs.

This project implements something similar for shiny by allowing
users to create inputs that, instead of <code>inputId</code>, take
a <code>name</code> argument which <strong>can be shared by multiple inputs</strong>. 
This makes it is possible to sensibly dynamically generate 
inputs in R.

You can see a small explanation/example with <code>gallery()</code>.
