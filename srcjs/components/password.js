import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { Text } from "./text.js";

export class Password extends Text {
  render() {
    return html`<input
      class = 'form-control ${this.class}'
      value = '${this.value}'
      type = 'password'
			@keyup='${this._keyup}'
			@keydown='${this._keydown}'
			placeholder='${this.placeholder}'>`;
  }
}

customElements.define("litter-password", Password);
