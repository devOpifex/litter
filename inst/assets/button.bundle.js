(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["button"],{

/***/ "./srcjs/components/button.js":
/*!************************************!*\
  !*** ./srcjs/components/button.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionButton": () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");





class ActionButton extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  static properties = {
    value: { type: Number },
  };

  constructor() {
    super();
    this.value = 0;
  }

  firstUpdated() {
  }

  _increment(e) {
    this.value++;
    this._send();
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<button 
			@click="${this._increment}" 
			class='btn btn-default ${this.class}'>
			<slot></slot>
		</button>`;
  }
}

customElements.define("litter-button", ActionButton);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/button.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3hCO0FBQ0M7QUFDdUI7O0FBRWhDLDJCQUEyQiwrQ0FBUTtBQUMxQztBQUNBLGFBQWEsY0FBYztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxxQ0FBSTtBQUNmLGFBQWEsZ0JBQWdCO0FBQzdCLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ3VDO0FBQ0o7QUFDcEI7QUFDQztBQUNLOztBQUVkLHVCQUF1QiwyQ0FBVTtBQUN4QyxtQkFBbUIsZ0RBQU07O0FBRXpCO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLFlBQVksY0FBYztBQUMxQixhQUFhLGNBQWM7QUFDM0IsZ0JBQWdCLGNBQWM7QUFDOUIsZ0JBQWdCLGNBQWM7QUFDOUIsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLEdBQUc7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUNoQ0Q7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcIlNoaW55XCIiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgXCJTaGlueVwiO1xuaW1wb3J0IFwialF1ZXJ5XCI7XG5pbXBvcnQgeyBMaXRJbnB1dCB9IGZyb20gXCIuLi9pbnB1dC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uIGV4dGVuZHMgTGl0SW5wdXQge1xuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICB2YWx1ZTogeyB0eXBlOiBOdW1iZXIgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICB9XG5cbiAgX2luY3JlbWVudChlKSB7XG4gICAgdGhpcy52YWx1ZSsrO1xuICAgIHRoaXMuX3NlbmQoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gaHRtbGA8YnV0dG9uIFxuXHRcdFx0QGNsaWNrPVwiJHt0aGlzLl9pbmNyZW1lbnR9XCIgXG5cdFx0XHRjbGFzcz0nYnRuIGJ0bi1kZWZhdWx0ICR7dGhpcy5jbGFzc30nPlxuXHRcdFx0PHNsb3Q+PC9zbG90PlxuXHRcdDwvYnV0dG9uPmA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl0dGVyLWJ1dHRvblwiLCBBY3Rpb25CdXR0b24pO1xuIiwiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGdldEJzNSB9IGZyb20gXCIuL2Nzcy9iczVcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCBcIi4vdXBkYXRlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXRJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2dldEJzNSgpXTtcblxuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNsYXNzOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHByaW9yaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNhbGxiYWNrOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHNlbmRfb25fY29ubmVjdDogeyBcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBjb252ZXJ0ZXI6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRhOiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBcImRlZmVycmVkXCI7XG4gICAgdGhpcy5jbGFzcyA9IFwiXCI7XG4gICAgdGhpcy5tZXRhID0ge307XG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmNhbGxiYWNrID0gXCJcIjtcbiAgICB0aGlzLnNlbmRfb25fY29ubmVjdCA9IHRydWU7XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5fc2VuZE9uQ29ubmVjdCgpO1xuICB9XG5cbiAgX3NlbmQoKSB7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIGxldCBjYiA9IGV2YWwodGhpcy5jYWxsYmFjayk7XG4gICAgICBjYih0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYW1lID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIHByb3BzOiB0aGlzLm1ldGEsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgIGRhdGEuaWQgPSB0aGlzLmlkO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBTaGlueS5zZXRJbnB1dFZhbHVlKFxuICAgICAgICB0aGlzLm5hbWUgKyBcIjpsaXR0ZXIucGFyc2VcIixcbiAgICAgICAgZGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcInNoaW55IG5vdCBjb25uZWN0ZWRcIik7XG4gICAgfVxuICB9XG5cbiAgX3NlbmRUaHJvdHRsZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fc2VuZCgpO1xuICAgIH0sIDI1MCk7XG4gIH1cblxuICBfc2VuZE9uQ29ubmVjdCgpIHtcbiAgICBpZighdGhpcy5zZW5kX29uX2Nvbm5lY3QpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbmRfb25fY29ubmVjdClcblxuICAgICQoZG9jdW1lbnQpLm9uKFwic2hpbnk6Y29ubmVjdGVkXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLl9zZW5kKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IHNlbGVjdCA9IChtc2cpID0+IHtcbiAgaWYgKG1zZy5uYW1lKSB7XG4gICAgcmV0dXJuIGBbbmFtZT0nJHttc2cubmFtZX0nXWA7XG4gIH1cblxuICBpZiAobXNnLnNlbCkge1xuICAgIHJldHVybiBzZWw7XG4gIH1cblxuICBpZiAobXNnLmlkKSB7XG4gICAgcmV0dXJuIGAjJHtpZH1gO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImxpdHRlci11cGRhdGUtaW5wdXRcIiwgKG1zZykgPT4ge1xuICBsZXQgdGFyZ2V0ID0gc2VsZWN0KG1zZyk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhtc2cucHJvcHMpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBtc2cucHJvcHNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgJCh0YXJnZXQpLmF0dHIoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==