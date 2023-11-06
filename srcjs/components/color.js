import { html } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Color extends LitInput {
  _change() {
    this.value = this.shadowRoot.querySelector("input").value;
  }

  updated() {
    this._send();
  }

  render() {
    return html`<input
      class="form-control ${this.class}"
      value="${this.value}"
      type="color"
      @change="${this._change}"
      placeholder="${this.placeholder}"
    />`;
  }
}

customElements.define("litter-color", Color);
