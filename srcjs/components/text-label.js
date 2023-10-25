import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { Text } from "./text.js";

export class TextLabel extends Text {
  static properties = {
    label: { type: String },
  };

  render() {
    return html`
    <div class="form-floating ${this.class}">
      <input
        class = 'form-control'
        value = '${this.value}'
        type = 'text'
        @keyup='${this._keyup}'
			  @keydown='${this._keydown}'
        id="floating"
        placeholder='${this.placeholder}'>
      <label for="floating">${this.label}</label>
    </div>
      `;
  }
}

customElements.define("litter-textlabel", TextLabel);
