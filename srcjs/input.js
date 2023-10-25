import { css, html, LitElement } from "lit";
import { getBs5 } from "./css/bs5";
import "Shiny";
import "jQuery";
import "./update.js";

export class LitInput extends LitElement {
  static styles = [getBs5(), css`.pointer {cursor: pointer;}`];

  static properties = {
    value: { type: String },
    name: { type: String },
    class: { type: String },
    priority: { type: String },
    callback: { type: String },
    id: { type: String },
    send_on_render: {
      type: Boolean,
      converter: (value, _) => {
        value = value.toLowerCase();
        return value == "false" ? false : true;
      },
    },
    meta: {},
    rendered: { type: Boolean, state: false },
  };

  constructor() {
    super();
    this.priority = "deferred";
    this.class = "";
    this.meta = {};
    this.id = null;
    this.timeout = null;
    this.callback = "";
    this.rendered = false;
    this.send_on_render = true;
  }

  _send() {
    if (this.callback) {
      const cb = eval(this.callback);
      cb(this);
      return;
    }

    if (this.name == "") {
      return;
    }

    if (!this.rendered && !this.send_on_render) {
      return;
    }

    this.rendered = true;

    const data = {
      props: this.meta,
      value: this.value,
    };

    if (this.id) {
      data.id = this.id;
    }

    // we try to send the value
    // it may fail because we send it before Shiny connects
    try {
      this._setInputValue(data);
    } catch (_error) {
      this._sendOnConnect(data);
    }
  }

  _sendThrottle() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this._send();
    }, 250);
  }

  _setInputValue(data) {
    Shiny.setInputValue(
      this.name + ":litter.parse",
      data,
      {
        priority: this.priority,
      },
    );
  }

  _sendOnConnect(data) {
    $(document).on("shiny:connected", () => {
      this._setInputValue(data);
    });
  }
}
