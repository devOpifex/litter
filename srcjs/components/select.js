import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Select extends LitInput {
  static properties = {
    options: { type: Array },
  };

  constructor() {
    super();
    this.options = [];
  }

  firstUpdated() {
    if (!this.value) {
      return;
    }
    this.shadowRoot.querySelector("select").value = this.value;
  }

  _setValue() {
    this.value = this.renderRoot.querySelector("select").value;
    this._send();
  }

  _change() {
    this._setValue();
    this._send();
  }

  render() {
    const opts = this.options.map((el) =>
      html`<option value="${el.value}">${el.label}</option>`
    );
    return html`<select
			class='form-select ${this.class}' @change=${this._change}>
      ${opts}
		</select>`;
  }
}

window.customElements.define("litter-select", Select);
