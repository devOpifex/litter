import { html } from "lit";
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
    this.shadowRoot.querySelector("select").value = this.value;
  }

  updated() {
    this.shadowRoot.querySelector("select").value = this.value;
    this._send();
  }

  _setValue() {
    this.value = this.renderRoot.querySelector("select").value;
  }

  _change() {
    this._setValue();
  }

  render() {
    const opts = this.options.map(
      (el) => html`<option value="${el.value}">${el.label}</option>`,
    );
    return html`<select
      class="form-select ${this.class}"
      @change=${this._change}
    >
      ${opts}
    </select>`;
  }
}

customElements.define("litter-select", Select);
