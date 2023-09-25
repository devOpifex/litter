import { html, LitElement } from "lit";
import { bs5 } from "./css/bs5";
import "Shiny";
import "jQuery";

export class LitInput extends LitElement {
  static styles = [bs5];

  static properties = {
    value: { type: String },
    name: { type: String },
    class: { type: String },
    priority: { type: String },
    id: { type: String },
    meta: {},
  };

  constructor() {
    super();
    this.priority = "deferred";
    this.class = "";
    this.meta = {};
    this.id = null;
    this.timeout = null;
  }

  _send() {
    if (this.callback) {
      let cb = eval(this.callback);
      cb(this);
      return;
    }

    let data = {
      meta: this.meta,
      value: this.value,
    };

    if (this.id) {
      data.id = this.id;
    }

    Shiny.setInputValue(
      this.name + ":litter.parse",
      data,
      {
        priority: this.priority,
      },
    );
  }

  _sendThrottle() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this._send();
    }, 250);
  }
}
