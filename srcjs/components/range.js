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
    styles: {},
  };

  constructor() {
    super();
    this.value = 0;
    this.styles = { left: "50%" };
  }

  firstUpdated() {
    this._input = this.shadowRoot.querySelector("input");
    let perc = ((this.value - this.min) * 100) / (this.max - this.min);
    this.styles = { left: `calc(${perc}% + (${8 - perc * 0.20}px))` };
  }

  _change() {
    this.value = this._input.value;
    let output = this.shadowRoot.querySelector("output");
    let perc = ((this.value - this.min) * 100) / (this.max - this.min);
    this.styles = { left: `calc(${perc}% + (${8 - perc * 0.20}px))` };
    this._sendThrottle();
  }

  render() {
    return html`<div>
      <span class="float-start">${this.min}</span>
      <span class="float-end">${this.max}</span>
      <output class="position-absolute" style=${
      styleMap(this.styles)
    }>${this.value}</output>
    </div>
      <input
        @input='${this._change}'
        type='range'
        min='${this.min}'
        max='${this.max}'
        step='${this.step}'
        value='${this.value}'
        class='form-range ${this.class}'>`;
  }
}

window.customElements.define("litter-range", Range);
