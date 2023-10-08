(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["radios"],{

/***/ "./srcjs/components/radios.js":
/*!************************************!*\
  !*** ./srcjs/components/radios.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Radios": () => (/* binding */ Radios)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");





class Radios extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  static properties = {
    options: { type: Array },
  };

  constructor() {
    super();
    this.options = [];
  }

  updated() {
    this.shadowRoot.querySelector(`input[value='${this.value}']`).checked =
      true;
    this._send();
  }

  _setValue() {
    let inputs = this.renderRoot.querySelectorAll("input");
    let values = Array.from(inputs).map((input) => {
      if (input.checked) {
        return (input.value);
      }
    }).filter((el) => el != undefined);

    this.value = values[0];
  }

  _change() {
    this._setValue();
  }

  render() {
    const opts = this.options.map((el) =>
      lit__WEBPACK_IMPORTED_MODULE_0__.html`<div class="form-check ${this.class}">
        <input class="form-check-input" type="radio" name="radios" value="${el}"/>
        <label class="form-check-label">${el}</label>
      </div>`
    );
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<div class="radios-wrapper"
			@change=${this._change}>
      ${opts}
		</div>`;
  }
}

customElements.define("litter-radios", Radios);


/***/ }),

/***/ "./srcjs/input.js":
/*!************************!*\
  !*** ./srcjs/input.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LitInput": () => (/* binding */ LitInput)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _css_bs5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/bs5 */ "./srcjs/css/bs5.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update.js */ "./srcjs/update.js");
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);






class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static styles = [(0,_css_bs5__WEBPACK_IMPORTED_MODULE_1__.getBs5)()];

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

    console.log(this.send_on_connect)

    $(document).on("shiny:connected", (e) => {
      this._send();
    });
  }
}


/***/ }),

/***/ "./srcjs/update.js":
/*!*************************!*\
  !*** ./srcjs/update.js ***!
  \*************************/
/***/ (() => {

const select = (msg) => {
  if (msg.name) {
    return `[name='${msg.name}']`;
  }

  if (msg.sel) {
    return sel;
  }

  if (msg.id) {
    return `#${id}`;
  }

  return null;
};

Shiny.addCustomMessageHandler("litter-update-input", (msg) => {
  let target = select(msg);

  if (!target) {
    return;
  }

  Object.keys(msg.props).forEach((key, index) => {
    let value = msg.props[key];

    if (typeof value == "object") {
      value = JSON.stringify(value);
    }

    $(target).attr(key, value);
  });
});


/***/ }),

/***/ "Shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = Shiny;

/***/ }),

/***/ "jQuery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/radios.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9zLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3hCO0FBQ0M7QUFDdUI7O0FBRWhDLHFCQUFxQiwrQ0FBUTtBQUNwQztBQUNBLGVBQWUsYUFBYTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRCxXQUFXO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLHFDQUFJLDBCQUEwQixXQUFXO0FBQy9DLDRFQUE0RSxHQUFHO0FBQy9FLDBDQUEwQyxHQUFHO0FBQzdDO0FBQ0E7QUFDQSxXQUFXLHFDQUFJO0FBQ2YsYUFBYSxhQUFhO0FBQzFCLFFBQVE7QUFDUjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEdUM7QUFDSjtBQUNwQjtBQUNDO0FBQ0s7O0FBRWQsdUJBQXVCLDJDQUFVO0FBQ3hDLG1CQUFtQixnREFBTTs7QUFFekI7QUFDQSxhQUFhLGNBQWM7QUFDM0IsWUFBWSxjQUFjO0FBQzFCLGFBQWEsY0FBYztBQUMzQixnQkFBZ0IsY0FBYztBQUM5QixnQkFBZ0IsY0FBYztBQUM5QixVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsR0FBRztBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ2hDRDs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2NvbXBvbmVudHMvcmFkaW9zLmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2lucHV0LmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCB7IExpdElucHV0IH0gZnJvbSBcIi4uL2lucHV0LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBSYWRpb3MgZXh0ZW5kcyBMaXRJbnB1dCB7XG4gIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgIG9wdGlvbnM6IHsgdHlwZTogQXJyYXkgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICB9XG5cbiAgdXBkYXRlZCgpIHtcbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihgaW5wdXRbdmFsdWU9JyR7dGhpcy52YWx1ZX0nXWApLmNoZWNrZWQgPVxuICAgICAgdHJ1ZTtcbiAgICB0aGlzLl9zZW5kKCk7XG4gIH1cblxuICBfc2V0VmFsdWUoKSB7XG4gICAgbGV0IGlucHV0cyA9IHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgbGV0IHZhbHVlcyA9IEFycmF5LmZyb20oaW5wdXRzKS5tYXAoKGlucHV0KSA9PiB7XG4gICAgICBpZiAoaW5wdXQuY2hlY2tlZCkge1xuICAgICAgICByZXR1cm4gKGlucHV0LnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KS5maWx0ZXIoKGVsKSA9PiBlbCAhPSB1bmRlZmluZWQpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlc1swXTtcbiAgfVxuXG4gIF9jaGFuZ2UoKSB7XG4gICAgdGhpcy5fc2V0VmFsdWUoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zLm1hcCgoZWwpID0+XG4gICAgICBodG1sYDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrICR7dGhpcy5jbGFzc31cIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb3NcIiB2YWx1ZT1cIiR7ZWx9XCIvPlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCI+JHtlbH08L2xhYmVsPlxuICAgICAgPC9kaXY+YFxuICAgICk7XG4gICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cInJhZGlvcy13cmFwcGVyXCJcblx0XHRcdEBjaGFuZ2U9JHt0aGlzLl9jaGFuZ2V9PlxuICAgICAgJHtvcHRzfVxuXHRcdDwvZGl2PmA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl0dGVyLXJhZGlvc1wiLCBSYWRpb3MpO1xuIiwiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGdldEJzNSB9IGZyb20gXCIuL2Nzcy9iczVcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCBcIi4vdXBkYXRlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXRJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2dldEJzNSgpXTtcblxuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNsYXNzOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHByaW9yaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNhbGxiYWNrOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHNlbmRfb25fY29ubmVjdDogeyBcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBjb252ZXJ0ZXI6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRhOiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBcImRlZmVycmVkXCI7XG4gICAgdGhpcy5jbGFzcyA9IFwiXCI7XG4gICAgdGhpcy5tZXRhID0ge307XG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmNhbGxiYWNrID0gXCJcIjtcbiAgICB0aGlzLnNlbmRfb25fY29ubmVjdCA9IHRydWU7XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5fc2VuZE9uQ29ubmVjdCgpO1xuICB9XG5cbiAgX3NlbmQoKSB7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIGxldCBjYiA9IGV2YWwodGhpcy5jYWxsYmFjayk7XG4gICAgICBjYih0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYW1lID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIHByb3BzOiB0aGlzLm1ldGEsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgIGRhdGEuaWQgPSB0aGlzLmlkO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBTaGlueS5zZXRJbnB1dFZhbHVlKFxuICAgICAgICB0aGlzLm5hbWUgKyBcIjpsaXR0ZXIucGFyc2VcIixcbiAgICAgICAgZGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcInNoaW55IG5vdCBjb25uZWN0ZWRcIik7XG4gICAgfVxuICB9XG5cbiAgX3NlbmRUaHJvdHRsZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fc2VuZCgpO1xuICAgIH0sIDI1MCk7XG4gIH1cblxuICBfc2VuZE9uQ29ubmVjdCgpIHtcbiAgICBpZighdGhpcy5zZW5kX29uX2Nvbm5lY3QpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbmRfb25fY29ubmVjdClcblxuICAgICQoZG9jdW1lbnQpLm9uKFwic2hpbnk6Y29ubmVjdGVkXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLl9zZW5kKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IHNlbGVjdCA9IChtc2cpID0+IHtcbiAgaWYgKG1zZy5uYW1lKSB7XG4gICAgcmV0dXJuIGBbbmFtZT0nJHttc2cubmFtZX0nXWA7XG4gIH1cblxuICBpZiAobXNnLnNlbCkge1xuICAgIHJldHVybiBzZWw7XG4gIH1cblxuICBpZiAobXNnLmlkKSB7XG4gICAgcmV0dXJuIGAjJHtpZH1gO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImxpdHRlci11cGRhdGUtaW5wdXRcIiwgKG1zZykgPT4ge1xuICBsZXQgdGFyZ2V0ID0gc2VsZWN0KG1zZyk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhtc2cucHJvcHMpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBtc2cucHJvcHNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgJCh0YXJnZXQpLmF0dHIoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==