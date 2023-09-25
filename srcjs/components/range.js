import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Range extends LitInput {
  static properties = {
    value: { type: Number },
  };

  constructor() {
    super();
    this.value = 0;
  }

  firstUpdated() {
    this._input = this.shadowRoot.querySelector("input");
  }

  _change() {
    this.value = this._input.value;
    this._sendThrottle();
  }

  render() {
    return html`<input
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
