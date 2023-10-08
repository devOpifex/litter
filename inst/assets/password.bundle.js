(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["password"],{

/***/ "./srcjs/components/password.js":
/*!**************************************!*\
  !*** ./srcjs/components/password.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Password": () => (/* binding */ Password)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");





class Password extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  _change() {
    this.value = this.shadowRoot.querySelector("input").value;
  }

  updated() {
    this._sendThrottle();
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<input
      class = 'form-control ${this.class}'
      value = '${this.value}'
      type = 'password'
			@keyup='${this._change}'
			placeholder='${this.placeholder}'>`;
  }
}

customElements.define("litter-password", Password);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/password.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFzc3dvcmQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDeEI7QUFDQztBQUN1Qjs7QUFFaEMsdUJBQXVCLCtDQUFRO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHFDQUFJO0FBQ2YsOEJBQThCLFdBQVc7QUFDekMsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQSxhQUFhLGFBQWE7QUFDMUIsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnVDO0FBQ0o7QUFDcEI7QUFDQztBQUNLOztBQUVkLHVCQUF1QiwyQ0FBVTtBQUN4QyxtQkFBbUIsZ0RBQU07O0FBRXpCO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLFlBQVksY0FBYztBQUMxQixhQUFhLGNBQWM7QUFDM0IsZ0JBQWdCLGNBQWM7QUFDOUIsZ0JBQWdCLGNBQWM7QUFDOUIsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLEdBQUc7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUNoQ0Q7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9jb21wb25lbnRzL3Bhc3N3b3JkLmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2lucHV0LmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCB7IExpdElucHV0IH0gZnJvbSBcIi4uL2lucHV0LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBQYXNzd29yZCBleHRlbmRzIExpdElucHV0IHtcbiAgX2NoYW5nZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZTtcbiAgfVxuXG4gIHVwZGF0ZWQoKSB7XG4gICAgdGhpcy5fc2VuZFRocm90dGxlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgPGlucHV0XG4gICAgICBjbGFzcyA9ICdmb3JtLWNvbnRyb2wgJHt0aGlzLmNsYXNzfSdcbiAgICAgIHZhbHVlID0gJyR7dGhpcy52YWx1ZX0nXG4gICAgICB0eXBlID0gJ3Bhc3N3b3JkJ1xuXHRcdFx0QGtleXVwPScke3RoaXMuX2NoYW5nZX0nXG5cdFx0XHRwbGFjZWhvbGRlcj0nJHt0aGlzLnBsYWNlaG9sZGVyfSc+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXR0ZXItcGFzc3dvcmRcIiwgUGFzc3dvcmQpO1xuIiwiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGdldEJzNSB9IGZyb20gXCIuL2Nzcy9iczVcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCBcIi4vdXBkYXRlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXRJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2dldEJzNSgpXTtcblxuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNsYXNzOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHByaW9yaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNhbGxiYWNrOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHNlbmRfb25fY29ubmVjdDogeyBcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBjb252ZXJ0ZXI6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRhOiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBcImRlZmVycmVkXCI7XG4gICAgdGhpcy5jbGFzcyA9IFwiXCI7XG4gICAgdGhpcy5tZXRhID0ge307XG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmNhbGxiYWNrID0gXCJcIjtcbiAgICB0aGlzLnNlbmRfb25fY29ubmVjdCA9IHRydWU7XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5fc2VuZE9uQ29ubmVjdCgpO1xuICB9XG5cbiAgX3NlbmQoKSB7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIGxldCBjYiA9IGV2YWwodGhpcy5jYWxsYmFjayk7XG4gICAgICBjYih0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYW1lID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIHByb3BzOiB0aGlzLm1ldGEsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgIGRhdGEuaWQgPSB0aGlzLmlkO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBTaGlueS5zZXRJbnB1dFZhbHVlKFxuICAgICAgICB0aGlzLm5hbWUgKyBcIjpsaXR0ZXIucGFyc2VcIixcbiAgICAgICAgZGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcInNoaW55IG5vdCBjb25uZWN0ZWRcIik7XG4gICAgfVxuICB9XG5cbiAgX3NlbmRUaHJvdHRsZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fc2VuZCgpO1xuICAgIH0sIDI1MCk7XG4gIH1cblxuICBfc2VuZE9uQ29ubmVjdCgpIHtcbiAgICBpZighdGhpcy5zZW5kX29uX2Nvbm5lY3QpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbmRfb25fY29ubmVjdClcblxuICAgICQoZG9jdW1lbnQpLm9uKFwic2hpbnk6Y29ubmVjdGVkXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLl9zZW5kKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IHNlbGVjdCA9IChtc2cpID0+IHtcbiAgaWYgKG1zZy5uYW1lKSB7XG4gICAgcmV0dXJuIGBbbmFtZT0nJHttc2cubmFtZX0nXWA7XG4gIH1cblxuICBpZiAobXNnLnNlbCkge1xuICAgIHJldHVybiBzZWw7XG4gIH1cblxuICBpZiAobXNnLmlkKSB7XG4gICAgcmV0dXJuIGAjJHtpZH1gO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImxpdHRlci11cGRhdGUtaW5wdXRcIiwgKG1zZykgPT4ge1xuICBsZXQgdGFyZ2V0ID0gc2VsZWN0KG1zZyk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhtc2cucHJvcHMpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBtc2cucHJvcHNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgJCh0YXJnZXQpLmF0dHIoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==