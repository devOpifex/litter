(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["color"],{

/***/ "./srcjs/components/color.js":
/*!***********************************!*\
  !*** ./srcjs/components/color.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Color": () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");





class Color extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  _change() {
    this.value = this.shadowRoot.querySelector("input").value;
  }

  updated() {
    this._send();
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<input
      class = 'form-control ${this.class}'
      value = '${this.value}'
      type = 'color'
			@change='${this._change}'
			placeholder='${this.placeholder}'>`;
  }
}

customElements.define("litter-color", Color);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/color.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDeEI7QUFDQztBQUN1Qjs7QUFFaEMsb0JBQW9CLCtDQUFRO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHFDQUFJO0FBQ2YsOEJBQThCLFdBQVc7QUFDekMsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQSxjQUFjLGFBQWE7QUFDM0Isa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnVDO0FBQ0o7QUFDcEI7QUFDQztBQUNLOztBQUVkLHVCQUF1QiwyQ0FBVTtBQUN4QyxtQkFBbUIsZ0RBQU07O0FBRXpCO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLFlBQVksY0FBYztBQUMxQixhQUFhLGNBQWM7QUFDM0IsZ0JBQWdCLGNBQWM7QUFDOUIsZ0JBQWdCLGNBQWM7QUFDOUIsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLEdBQUc7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUNoQ0Q7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9jb21wb25lbnRzL2NvbG9yLmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2lucHV0LmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCB7IExpdElucHV0IH0gZnJvbSBcIi4uL2lucHV0LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDb2xvciBleHRlbmRzIExpdElucHV0IHtcbiAgX2NoYW5nZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZTtcbiAgfVxuXG4gIHVwZGF0ZWQoKSB7XG4gICAgdGhpcy5fc2VuZCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxpbnB1dFxuICAgICAgY2xhc3MgPSAnZm9ybS1jb250cm9sICR7dGhpcy5jbGFzc30nXG4gICAgICB2YWx1ZSA9ICcke3RoaXMudmFsdWV9J1xuICAgICAgdHlwZSA9ICdjb2xvcidcblx0XHRcdEBjaGFuZ2U9JyR7dGhpcy5fY2hhbmdlfSdcblx0XHRcdHBsYWNlaG9sZGVyPScke3RoaXMucGxhY2Vob2xkZXJ9Jz5gO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdHRlci1jb2xvclwiLCBDb2xvcik7XG4iLCJpbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgZ2V0QnM1IH0gZnJvbSBcIi4vY3NzL2JzNVwiO1xuaW1wb3J0IFwiU2hpbnlcIjtcbmltcG9ydCBcImpRdWVyeVwiO1xuaW1wb3J0IFwiLi91cGRhdGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIExpdElucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbZ2V0QnM1KCldO1xuXG4gIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgIHZhbHVlOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgY2xhc3M6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgcHJpb3JpdHk6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgY2FsbGJhY2s6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgc2VuZF9vbl9jb25uZWN0OiB7IFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGNvbnZlcnRlcjogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGE6IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wcmlvcml0eSA9IFwiZGVmZXJyZWRcIjtcbiAgICB0aGlzLmNsYXNzID0gXCJcIjtcbiAgICB0aGlzLm1ldGEgPSB7fTtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBcIlwiO1xuICAgIHRoaXMuc2VuZF9vbl9jb25uZWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLl9zZW5kT25Db25uZWN0KCk7XG4gIH1cblxuICBfc2VuZCgpIHtcbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgbGV0IGNiID0gZXZhbCh0aGlzLmNhbGxiYWNrKTtcbiAgICAgIGNiKHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5hbWUgPT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0ge1xuICAgICAgcHJvcHM6IHRoaXMubWV0YSxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pZCkge1xuICAgICAgZGF0YS5pZCA9IHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIFNoaW55LnNldElucHV0VmFsdWUoXG4gICAgICAgIHRoaXMubmFtZSArIFwiOmxpdHRlci5wYXJzZVwiLFxuICAgICAgICBkYXRhLFxuICAgICAgICB7XG4gICAgICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwic2hpbnkgbm90IGNvbm5lY3RlZFwiKTtcbiAgICB9XG4gIH1cblxuICBfc2VuZFRocm90dGxlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZW5kKCk7XG4gICAgfSwgMjUwKTtcbiAgfVxuXG4gIF9zZW5kT25Db25uZWN0KCkge1xuICAgIGlmKCF0aGlzLnNlbmRfb25fY29ubmVjdClcbiAgICAgIHJldHVybjtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VuZF9vbl9jb25uZWN0KVxuXG4gICAgJChkb2N1bWVudCkub24oXCJzaGlueTpjb25uZWN0ZWRcIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuX3NlbmQoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3Qgc2VsZWN0ID0gKG1zZykgPT4ge1xuICBpZiAobXNnLm5hbWUpIHtcbiAgICByZXR1cm4gYFtuYW1lPScke21zZy5uYW1lfSddYDtcbiAgfVxuXG4gIGlmIChtc2cuc2VsKSB7XG4gICAgcmV0dXJuIHNlbDtcbiAgfVxuXG4gIGlmIChtc2cuaWQpIHtcbiAgICByZXR1cm4gYCMke2lkfWA7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwibGl0dGVyLXVwZGF0ZS1pbnB1dFwiLCAobXNnKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBzZWxlY3QobXNnKTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKG1zZy5wcm9wcykuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG1zZy5wcm9wc1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICB9XG5cbiAgICAkKHRhcmdldCkuYXR0cihrZXksIHZhbHVlKTtcbiAgfSk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gU2hpbnk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9