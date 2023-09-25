import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Text extends LitInput {
  firstUpdated() {
    this._input = this.shadowRoot.querySelector("input");
  }

  _change() {
    this.value = this._input.value;
    this._sendThrottle();
  }

  render() {
    return html`<input
      class = 'form-control ${this.class}'
      value = '${this.value}'
      type = 'text'
			@keyup='${this._change}'
			placeholder='${this.placeholder}'>`;
  }
}

customElements.define("litter-text", Text);
