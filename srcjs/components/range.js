import { html, LitElement, unsafeCSS } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";
import { styleMap } from "lit/directives/style-map.js";

export class Range extends LitInput {
  static properties = {
    value: { type: Number },
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
  };

  constructor() {
    super();
    this.value = 0;
    this.styles = { left: "50%" };
  }

  firstUpdated() {
    this._input = this.shadowRoot.querySelector("input");
    this._sendOnConnect();
  }

  willUpdate(props) {
    if (!props.has("value")) {
      return;
    }

    const value = props.get("value");
    let output = this.shadowRoot.querySelector("output");
    let perc = ((this.value - this.min) * 100) / (this.max - this.min);
    this.styles = { left: `calc(${perc}% + (${1 - perc * 0.15}px))` };
  }

  updated() {
    this._sendThrottle();
  }

  _change() {
    this.value = parseInt(this._input.value);
    let output = this.shadowRoot.querySelector("output");
    let perc = ((this.value - this.min) * 100) / (this.max - this.min);
    this.styles = { left: `calc(${perc}% + (${1 - perc * 0.15}px))` };
  }

  render() {
    return html`<div class="position-relative w-100">
      <span class="float-start" style=${
      styleMap({ fontSize: .75 + `rem` })
    }>${this.min}</span>
      <span class="float-end" style=${
      styleMap({ fontSize: .75 + `rem` })
    }>${this.max}</span>
      <output class="position-absolute rounded px-1 bg-primary text-white" style=${
      styleMap(this.styles)
    }>${this.value}</output>
      <input
        @input='${this._change}'
        type='range'
        min='${this.min}'
        max='${this.max}'
        step='${this.step}'
        value='${this.value}'
        class='form-range ${this.class}'>
    </div>`;
  }
}

window.customElements.define("litter-range", Range);
