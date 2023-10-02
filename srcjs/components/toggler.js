import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";
import { styleMap } from "lit/directives/style-map.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

export class Toggler extends LitInput {
  static properties = {
    inputShown: { type: Boolean, state: false },
    feedback: { type: String },
    accept: { type: String },
    default: { type: String, attribute: false },
  };

  constructor() {
    super();
    this.inputShown = false;
    this.feedback = "";
    this.accept = true;
    this.default = "";
  }

  _toggle() {
    this.shadowRoot.querySelector(".input").classList.toggle("d-none");
    this.shadowRoot.querySelector("slot[name=display]").classList.toggle(
      "d-none",
    );

    this.inputShown = !this.inputShown;
  }

  _showInput() {
    this.default =
      this.shadowRoot.querySelector("slot[name=input]").assignedElements({
        flatten: true,
      })[0].value;
    this.shadowRoot.querySelector("slot[name=input]").assignedElements({
      flatten: true,
    })[0].value = this.value;
    this._toggle();
  }

  _getValue() {
    this.value =
      this.shadowRoot.querySelector("slot[name=input]").assignedElements({
        flatten: true,
      })[0].value;
  }

  _validate() {
    if (this.accept != "true") {
      return;
    }

    this._toggle();
    this._getValue();
    this._send();
  }

  _cancel() {
    this.feedback = "";
    this.shadowRoot.querySelector("slot[name=input]").assignedElements({
      flatten: true,
    })[0].value = this.default;
    this._toggle();
  }

  render() {
    return html`
      <slot @click=${this._showInput} name="display">Click me</slot>
      <div class="d-none input position-relative d-flex">
        <div class="flex-grow-1">
          <slot name="input"></slot>
        </div>
        <div class="flex-shrink-1">
          <button @click=${this._cancel} class="btn btn-danger">
            <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button @click=${this._validate} class="btn btn-success">
            <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100"">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </button>
        </div>
      </div>
      ${unsafeHTML(this.feedback)}
    `;
  }
}

customElements.define("litter-toggler", Toggler);
