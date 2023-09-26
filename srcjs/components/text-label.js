import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class TextLabel extends LitInput {
  static properties = {
    label: { type: String },
  };

  _change() {
    this.value = this.shadowRoot.querySelector("input").value;
  }

  updated() {
    this._send();
  }

  render() {
    return html`
    <div class="form-floating ${this.class}">
      <input
        class = 'form-control'
        value = '${this.value}'
        type = 'text'
        @keyup='${this._change}'
        id="floating"
        placeholder='${this.placeholder}'>
      <label for="floating">${this.label}</label>
    </div>
      `;
  }
}

customElements.define("litter-textlabel", TextLabel);
