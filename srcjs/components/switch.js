import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Switch extends LitInput {
  static properties = {
    label: { type: String },
    value: { type: Boolean },
  };

  firstUpdated() {
    if (this.value) {
      this.shadowRoot.querySelector("input").checked = true;
    }
  }

  updated() {
    this._send();
  }

  _change() {
    this.value = this.shadowRoot.querySelector("input").checked;
  }

  render() {
    return html`<div class="form-check form-switch">
      <input
        class="form-check-input ${this.class}" 
        type="checkbox" 
        role="switch"
        @change='${this._change}'
      <label class="form-check-label">${this.label}</label>
    </div>`;
  }
}

customElements.define("litter-switch", Switch);
