import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class ActionButton extends LitInput {
  static properties = {
    value: { type: Number },
  };

  constructor() {
    super();
    this.value = 0;
    this.priority = "event";
  }

  _increment() {
    this.value++;
    this._send();
  }

  render() {
    return html`<button
      @click="${this._increment}"
      class="btn btn-default ${this.class}"
    >
      <slot></slot>
    </button>`;
  }
}

customElements.define("litter-button", ActionButton);
