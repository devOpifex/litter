import { html, LitElement } from "lit";
import { getBs5 } from "./css/bs5";
import "Shiny";
import "jQuery";
import "./update.js";

export class LitInput extends LitElement {
  static styles = [getBs5()];

  static properties = {
    value: { type: String },
    name: { type: String },
    class: { type: String },
    priority: { type: String },
    callback: { type: String },
    id: { type: String },
    send_on_connect: { 
      type: Boolean,
      converter: (value, type) => {
        value = value.toLowerCase();
        return value == "false" ? false : true;
      }
    },
    meta: {},
  };

  constructor() {
    super();
    this.priority = "deferred";
    this.class = "";
    this.meta = {};
    this.id = null;
    this.timeout = null;
    this.callback = "";
    this.send_on_connect = true;
  }

  firstUpdated() {
    this._sendOnConnect();
  }

  _send() {
    if (this.callback) {
      let cb = eval(this.callback);
      cb(this);
      return;
    }

    if (this.name == "") {
      return;
    }

    let data = {
      props: this.meta,
      value: this.value,
    };

    if (this.id) {
      data.id = this.id;
    }

    try {
      Shiny.setInputValue(
        this.name + ":litter.parse",
        data,
        {
          priority: this.priority,
        },
      );
    } catch (error) {
      console.error("shiny not connected");
    }
  }

  _sendThrottle() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this._send();
    }, 250);
  }

  _sendOnConnect() {
    if(!this.send_on_connect)
      return;

    $(document).on("shiny:connected", (e) => {
      this._send();
    });
  }
}
