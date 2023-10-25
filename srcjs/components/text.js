import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Text extends LitInput {
  _keyup() {
    this.value = this.shadowRoot.querySelector("input").value;

    if (this.send_on != "deferred") {
      return;
    }

    this._sendThrottle();
  }

  firstUpdated() {
    this._send();
  }

  _keydown(event) {
    if (this.send_on != "enter") {
      return;
    }

    if (event.key != "Enter") {
      return;
    }

    this._send();
  }

  render() {
    return html`<input
      class = 'form-control ${this.class}'
      value = '${this.value}'
      type = 'text'
			@keyup='${this._keyup}'
			@keydown='${this._keydown}'
			placeholder='${this.placeholder}'>`;
  }
}

customElements.define("litter-text", Text);
