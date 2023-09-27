import { html, LitElement } from "lit";
import "Shiny";
import "jQuery";
import { LitInput } from "../input.js";
import { styleMap } from "lit/directives/style-map.js";

export class Selectize extends LitInput {
  static properties = {
    options: { type: Array },
    value: { type: Array },
    endpoint: { type: String },
  };

  constructor() {
    super();
    this.endpoint = "";
    this.options = [];
    this.value = [];
    this.timeout;
    this.lastQuery = "";
  }

  _keyup() {
    clearTimeout(this.timeout);

    setTimeout(() => {
      const query = this.shadowRoot.querySelector("input").value;
      this.shadowRoot.querySelector("ul").classList.remove("d-none");

      const options = this.shadowRoot.querySelectorAll("li");
      Array.from(options).forEach((el) => {
        if (el.dataset.value.includes(query)) {
          el.style.display = "block";
          return;
        }

        el.style.display = "none";
      });

      if (this.endpoint != "" && query != "") {
        fetch(`${this.endpoint}&query=${encodeURIComponent(query)}`)
          .then((res) => res.json())
          .then((data) => {
            const optionsValuesToSet = data.map((el) => el.value);
            const missingValues = this.value.filter((val) =>
              !optionsValuesToSet.includes(val)
            );
            let newOpts = this.options.slice(0);
            let toAdd = newOpts.filter((el) => {
              return missingValues.includes(el.value);
            });
            data.push(...toAdd);
            this.options = data;
          })
          .catch((error) => console.error(error));
      }
    }, 250);
  }

  _selectItem(e) {
    this.value.push(e.target.dataset.value);
    this.value = [...new Set(this.value.slice(0))];
    this.shadowRoot.querySelector("input").value = "";
    this.shadowRoot.querySelector("ul").classList.add("d-none");
  }

  _removeItem(e) {
    this.value = this.value.filter((el) => el != e.target.dataset.value);
  }

  updated() {
    this._send();
  }

  render() {
    const opts = this.options.filter((el) => {
      return !this.value.includes(el);
    }).map((el) => {
      return html`<li @click=${this._selectItem} class="list-group-item" data-value="${el.value}">${
        el.label || el.value
      }</li>`;
    });

    const selected = this.options.filter((opt) => {
      return this.value.includes(opt.value);
    }).map((variable) => {
      return html`<span data-value="${variable.value}" @click=${this._removeItem} style=${
        styleMap({ height: 80 + "%", paddingTop: 1.5 + "%" })
      } class="badge bg-primary  m-1">${
        variable.label || variable.value
      }</span>`;
    });

    return html`<div class="d-flex">
      <div class="flex-shrink-1 position-relative">
        <input
          class='form-control ${this.class}' @keyup=${this._keyup} />
        <ul style=${
      styleMap({ zIndex: 9999, maxHeight: 15 + "rem" })
    } class="list-group w-100 position-absolute d-none bg-light">${opts}</ul>
      </div>
      <div class="flex-grow-1">${selected}</div>
    </div>
      `;
  }
}

customElements.define("litter-selectize", Selectize);
