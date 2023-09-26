import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Checkboxes extends LitInput {
  static properties = {
    options: { type: Array },
    value: { type: Array },
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
    let inputs = this.renderRoot.querySelectorAll("input");
    let values = Array.from(inputs).map((input) => {
      if (input.checked) {
        return (input.value);
      }
    }).filter((el) => el != undefined);

    this.value = values;
  }

  _change() {
    this._setValue();
    this._send();
  }

  render() {
    const opts = this.options.map((el) =>
      html`<div class="form-check ${this.class}">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="${el}"/>
        <label class="form-check-label">${el}</label>
      </div>`
    );
    return html`<div class="checkboxes-wrapper"
			@change=${this._change}>
      ${opts}
		</div>`;
  }
}

window.customElements.define("litter-checkboxes", Checkboxes);
