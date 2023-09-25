"use strict";
(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["range-ion"],{

/***/ "./srcjs/components/range-ion.js":
/*!***************************************!*\
  !*** ./srcjs/components/range-ion.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeIon": () => (/* binding */ RangeIon)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");





class RangeIon extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  static properties = {
    value: { type: Number },
  };

  constructor() {
    super();
    this.value = 0;
  }

  firstUpdated() {
    this._input = this.shadowRoot.querySelector("input");
    $(this._input).ionRangeSlider();
  }

  _change() {
    this.value = this._input.value;
    this._sendThrottle();
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<input
			@input='${this._change}'
			type='range'
			min='${this.min}'
			max='${this.max}'
			step='${this.step}'
      value='${this.value}'
			class='form-range ${this.class}'>`;
  }
}

customElements.define("litter-range-ion", RangeIon);


/***/ }),

/***/ "./srcjs/input.js":
/*!************************!*\
  !*** ./srcjs/input.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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





class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static styles = [_css_bs5__WEBPACK_IMPORTED_MODULE_1__.bs5];

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


/***/ }),

/***/ "Shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

module.exports = Shiny;

/***/ }),

/***/ "jQuery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/range-ion.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UtaW9uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3hCO0FBQ0M7QUFDdUI7O0FBRWhDLHVCQUF1QiwrQ0FBUTtBQUN0QztBQUNBLGFBQWEsY0FBYztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcscUNBQUk7QUFDZixhQUFhLGFBQWE7QUFDMUI7QUFDQSxVQUFVLFNBQVM7QUFDbkIsVUFBVSxTQUFTO0FBQ25CLFdBQVcsVUFBVTtBQUNyQixlQUFlLFdBQVc7QUFDMUIsdUJBQXVCLFdBQVc7QUFDbEM7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN1QztBQUNQO0FBQ2pCO0FBQ0M7O0FBRVQsdUJBQXVCLDJDQUFVO0FBQ3hDLG1CQUFtQix5Q0FBRzs7QUFFdEI7QUFDQSxhQUFhLGNBQWM7QUFDM0IsWUFBWSxjQUFjO0FBQzFCLGFBQWEsY0FBYztBQUMzQixnQkFBZ0IsY0FBYztBQUM5QixVQUFVLGNBQWM7QUFDeEIsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7O0FDMURBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9jb21wb25lbnRzL3JhbmdlLWlvbi5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCB7IExpdElucHV0IH0gZnJvbSBcIi4uL2lucHV0LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBSYW5nZUlvbiBleHRlbmRzIExpdElucHV0IHtcbiAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgdmFsdWU6IHsgdHlwZTogTnVtYmVyIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gMDtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLl9pbnB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgJCh0aGlzLl9pbnB1dCkuaW9uUmFuZ2VTbGlkZXIoKTtcbiAgfVxuXG4gIF9jaGFuZ2UoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuX2lucHV0LnZhbHVlO1xuICAgIHRoaXMuX3NlbmRUaHJvdHRsZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxpbnB1dFxuXHRcdFx0QGlucHV0PScke3RoaXMuX2NoYW5nZX0nXG5cdFx0XHR0eXBlPSdyYW5nZSdcblx0XHRcdG1pbj0nJHt0aGlzLm1pbn0nXG5cdFx0XHRtYXg9JyR7dGhpcy5tYXh9J1xuXHRcdFx0c3RlcD0nJHt0aGlzLnN0ZXB9J1xuICAgICAgdmFsdWU9JyR7dGhpcy52YWx1ZX0nXG5cdFx0XHRjbGFzcz0nZm9ybS1yYW5nZSAke3RoaXMuY2xhc3N9Jz5gO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdHRlci1yYW5nZS1pb25cIiwgUmFuZ2VJb24pO1xuIiwiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGJzNSB9IGZyb20gXCIuL2Nzcy9iczVcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcblxuZXhwb3J0IGNsYXNzIExpdElucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYnM1XTtcblxuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNsYXNzOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHByaW9yaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIG1ldGE6IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wcmlvcml0eSA9IFwiZGVmZXJyZWRcIjtcbiAgICB0aGlzLmNsYXNzID0gXCJcIjtcbiAgICB0aGlzLm1ldGEgPSB7fTtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgX3NlbmQoKSB7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIGxldCBjYiA9IGV2YWwodGhpcy5jYWxsYmFjayk7XG4gICAgICBjYih0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIG1ldGE6IHRoaXMubWV0YSxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pZCkge1xuICAgICAgZGF0YS5pZCA9IHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShcbiAgICAgIHRoaXMubmFtZSArIFwiOmxpdHRlci5wYXJzZVwiLFxuICAgICAgZGF0YSxcbiAgICAgIHtcbiAgICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBfc2VuZFRocm90dGxlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZW5kKCk7XG4gICAgfSwgMjUwKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=