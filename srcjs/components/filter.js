import { html, LitElement } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";

export class Filter extends LitInput {
  static properties = {
    endpoint: { type: String },
    dataset: { type: Array },
    selected: { type: Array },
  };

  firstUpdated() {}

  constructor() {
    super();
    this.endpoint = "";
    this.dataset = [];
    this.selected = [];
    this.shown = false;
  }

  _showDropdown() {
    this.shadowRoot.querySelector(".dropdown-menu").style.display = "flow-root";
    this.shown = true;
  }

  _hideDropdown() {
    this.shadowRoot.querySelector(".dropdown-menu").style.display = "none";
    this.shown = false;
  }

  _click() {
    if (!this.shown) {
      this._showDropdown();
      return;
    }

    this._hideDropdown();
  }

  _itemClick(event) {
    this._hideDropdown();
    this.selected.push(event.target.dataset.value);
    this.selected = this.selected.slice(0);
  }

  _variableRemove(event) {
    const filtered = this.selected.filter((selected) => {
      selected != event.target.dataset.value;
    });
    this.selected = filtered;
  }

  _renderButton() {
    return html`<button @click=${this._click} class="btn btn-outline-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">Add variable</button>`;
  }

  _renderInput(variable) {
    if (variable.type == "factor") {
      return this._renderFactor(variable);
    }

    if (variable.type == "numeric") {
      return this._renderNumeric(variable);
    }

    if (variable.type == "logical") {
      return this._renderLogical(variable);
    }

    return this._renderCharacter(variable);
  }

  _renderFactor(variable) {
    let values = variable.values.map((el) => {
      return { label: el, label: el };
    });
    return html`<litter-selectize meta="[]" placeholder="Search a value" name="" options='${
      JSON.stringify(values)
    }' ></litter-selectize>`;
  }

  _renderNumeric(variable) {
    return html`<litter-range min="${variable.min}" max="${variable.max}" step="1" name=""></litter-range>`;
  }

  _renderCharacter(variable) {
    return html`<litter-text name="" value=""></litter-text>`;
  }

  _renderLogical(variable) {
    return html`<litter-checkboxes name="" value='[true, false]' options='[true, false]'></litter-checkboxes>`;
  }

  render() {
    console.log(this.dataset);
    const button = this._renderButton();

    // no variables (yet)
    if (this.dataset.length == 0) {
      return button;
    }

    const options = this.dataset.filter((variable) => {
      return !this.selected.includes(variable.name);
    }).map((el) => {
      return html`<li><a data-value="${el.name}" class="dropdown-item">${
        el.label || el.name
      }</a></li>`;
    });

    const dropdown = html`<div class="input-group">
      ${button}
      <ul @click=${this._itemClick} class="dropdown-menu dropdown-menu-end w-100">
      ${options}
      </ul>
    </div>`;

    if (this.selected.length == 0) {
      return dropdown;
    }

    let filters = this.dataset.filter((variable) => {
      return this.selected.includes(variable.name);
    }).map((variable) => {
      const input = this._renderInput(variable);
      return html`<div class="card mb-1">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex-grow-1">
              <p class="fw-bold">${variable.label || variable.name}</p>
            </div>
            <div class="flex-shrink-1">
              <span data-value="${variable.name}" @click=${this._variableRemove}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-danger" style=${
        styleMap({ height: 1 + "rem", cursor: "pointer" })
      }>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </a>
            </div>
          </div>
          ${input}
        </div>
      </div>`;
    });

    return html`${filters}${dropdown}`;
  }
}

customElements.define("litter-filter", Filter);
