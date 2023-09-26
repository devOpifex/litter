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
    this._input = this.shadowRoot.querySelector("input");

    if (this.value) {
      this._input.checked = true;
    }
    this.value = this._input.checked;
  }

  _change() {
    this.value = this._input.checked;
    this._sendThrottle();
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
