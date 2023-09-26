import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Radios extends LitInput {
  static properties = {
    options: { type: Array },
  };

  constructor() {
    super();
    this.options = [];
  }

  firstUpdated() {
    this.shadowRoot.querySelector(`input[value='${this.value}']`).checked =
      true;
  }

  _setValue() {
    let inputs = this.renderRoot.querySelectorAll("input");
    let values = Array.from(inputs).map((input) => {
      if (input.checked) {
        return (input.value);
      }
    }).filter((el) => el != undefined);

    this.value = values[0];
  }

  _change() {
    this._setValue();
    this._send();
  }

  render() {
    const opts = this.options.map((el) =>
      html`<div class="form-check ${this.class}">
        <input class="form-check-input" type="radio" name="radios" value="${el}"/>
        <label class="form-check-label">${el}</label>
      </div>`
    );
    return html`<div class="radios-wrapper"
			@change=${this._change}>
      ${opts}
		</div>`;
  }
}

customElements.define("litter-radios", Radios);
