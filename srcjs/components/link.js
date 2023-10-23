import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class ActionLink extends LitInput {
  static properties = {
    value: { type: Number },
  };

  constructor() {
    super();
    this.value = 0;
    this.priority = "event";
  }

  firstUpdated() {
  }

  _increment(e) {
    this.value++;
    this._send();
  }

  render() {
    return html`<a
			@click="${this._increment}" 
			class='pointer ${this.class}'>
			<slot></slot>
		</a>`;
  }
}

customElements.define("litter-link", ActionLink);
