import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Datalist extends LitInput {
  static properties = {
    options: { type: Array },
    placeholder: { type: String },
    endpoint: { type: String },
  };

  constructor() {
    super();
    this.options = [];
    this.endpoint = "";
    this.timeout;
    this.lastSearch = "";
  }

  firstUpdated() {
    this._sendOnConnect();

    if (!this.value) {
      return;
    }

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
    this.value = this.shadowRoot.querySelector("input").value;
  }

  _change() {
    const value = this.shadowRoot.querySelector("input").value;
    this.shadowRoot.querySelector("input").blur();

    let found = this.options.filter((opt) => {
      return opt.value == value;
    });

    if (found.length == 0) {
      return;
    }

    this._setValue();
  }

  _input() {
    const value = this.shadowRoot.querySelector("input").value;

    let found = this.options.filter((opt) => {
      return opt.value == value;
    });

    if (found.length == 0) {
      return;
    }

    this._setValue();
  }

  _keyup(event) {
    if (!this.endpoint || this.endpoint == "") {
      return;
    }

    const value = event.currentTarget.value;

    if (value == this.lastSearch) {
      return;
    }

    this.lastSearch = value;

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      fetch(`${this.endpoint}&query=${encodeURIComponent(value)}`)
        .then((res) => res.json())
        .then((data) => {
          this.options = data;
        });
    }, 150);
  }

  render() {
    const opts = this.options.map((el) =>
      html`<option value="${el.value}">${el.label}</option<`
    );

    return html`<input @input=${this._input} @change=${this._change} @keyup=${this._keyup} placeholder="${this.placeholder}" list="datalist" class='form-control ${this.class}'/>
    <datalist id="datalist">
      ${opts}
		</datalist>`;
  }
}

customElements.define("litter-datalist", Datalist);
