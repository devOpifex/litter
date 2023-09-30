import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";
import { styleMap } from "lit/directives/style-map.js";

export class Toggler extends LitInput {
  static properties = {
    inputShown: {type: Boolean, state: false}
  }

  firstUpdated(){
  }

  _toggle(){
    this.shadowRoot.querySelector('.input').classList.toggle("d-none");
    this.shadowRoot.querySelector('slot[name=display]').classList.toggle("d-none");

    this.inputShown = !this.inputShown;
  }

  _showInput(){
    this.shadowRoot.querySelector('slot[name=input]').assignedElements({flatten: true})[0].value = this.value;
    this._toggle();
  }

  _getValue(){
    this.value = this.shadowRoot.querySelector('slot[name=input]').assignedElements({flatten: true})[0].value;
  }

  _validate(){
    this._toggle();
    this._getValue();
    this._send();
  }

  render() {
    return html`
      <slot @click=${this._showInput} name="display">Click me</slot>
      <div class="d-none input position-relative d-flex">
        <button @click=${this._toggle} class="flex-shrink-1 btn btn-danger">
          <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
          <div class="flex-grow-1">
            <slot name="input"></slot>
          </div>
        <button @click=${this._validate} class="flex-shrink-1 btn btn-success">
          <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100"">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>
      </div>
    `;
  }
}

customElements.define("litter-toggler", Toggler);

