import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Datalist extends LitInput {
  static properties = {
    options: { type: Array },
    placeholder: { type: String },
  };

  constructor() {
    super();
    this.options = [];
  }

  firstUpdated() {
    this._sendOnConnect();

    if (!this.value) {
      return;
    }

    console.log(this.value);
    this.shadowRoot.querySelector("input").value = this.value;
  }

  updated() {
    if (!this.value) {
      return;
    }

    this.shadowRoot.querySelector("input").value = this.value;
    this._send();
  }

  _setValue() {
    this.value = this.renderRoot.querySelector("input").value;
  }

  _change() {
    this._setValue();
  }

  render() {
    const opts = this.options.map((el) => html`<option value="${el.value}" />`);
    return html`<input placeholder="${this.placeholder}" list="datalist" class='form-control ${this.class}' @change=${this._change}/>
    <datalist id="datalist">
      ${opts}
		</datalist>`;
  }
}

customElements.define("litter-datalist", Datalist);
