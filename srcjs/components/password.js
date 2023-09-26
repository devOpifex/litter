import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Password extends LitInput {
  _change() {
    this.value = this.shadowRoot.querySelector("input").value;
    this._sendThrottle();
  }

  render() {
    return html`<input
      class = 'form-control ${this.class}'
      value = '${this.value}'
      type = 'password'
			@keyup='${this._change}'
			placeholder='${this.placeholder}'>`;
  }
}

customElements.define("litter-password", Password);
