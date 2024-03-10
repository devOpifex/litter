---
title: Introduction
---

Introduction
============

Before going into the nitty gritty we'll briefly look into the pros and cons;
the limitations of the package, what's currently implemented, and more.

## Limitations

Though {litter} is built on top of Shiny's existing handling of 
websocket messages it works very differently and as such there are 
a few limitations

- Only works with bslib's Bootstrap 5.
- These inputs are not captured by Shiny's bookmarking session
- These inputs are not captured by [shinytest2](https://rstudio.github.io/shinytest2/)

_These limitations are unlikely to be lifted in the future._

## Inputs

These inputs are currently available:

- `litActionButton`
- `litActionLink`
- `litCheckboxesInput`
- `litColorInput`
- `litDatalistInput`
- `litFilterInput`
- `litPasswordInput`
- `litTextInput`
- `litTextAreaInput`
- `litRadioInput`
- `litSwitchInput`
- `litTextLabelInput`
- `litTogglerInput`
- `litRangeInput`
- `litSelectInput`
- `litSelectizeInput`

## Conventions

- All input functions start in `lit`.
- All inputs have a `value` (even if it can be a vector of multiple values)
- All inputs can be updated with `update_input`
- All inputs accept a `callback` argument (Javascript function)
- Labels are not part of the input
- All inputs accept a `send_on_render` argument
- All inputs return data in the same format:

```r
list(
  props = list(),
  id = "", # omitted if not set
  value = 1L
)
```
