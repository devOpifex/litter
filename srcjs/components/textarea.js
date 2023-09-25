import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class TextArea extends LitInput {
  firstUpdated() {
    this._input = this.shadowRoot.querySelector("textarea");
  }

  _change() {
    this.value = this._input.value;
    this._sendThrottle();
  }

  render() {
    return html`<textarea
			@keyup='${this._change}'
			type='text'
			class='form-control ${this.class}' 
			placeholder='${this.placeholder}'
			.value='${this.value}'></textarea>`;
  }
}

customElements.define("litter-textarea", TextArea);
