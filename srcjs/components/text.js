import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Text extends LitInput {
  _keyup() {
    this.value = this.shadowRoot.querySelector("input").value;
  }

  updated() {
    this._sendThrottle();
  }

  render() {
    return html`<input
      class = 'form-control ${this.class}'
      value = '${this.value}'
      type = 'text'
			@keyup='${this._keyup}'
			placeholder='${this.placeholder}'>`;
  }
}

customElements.define("litter-text", Text);
