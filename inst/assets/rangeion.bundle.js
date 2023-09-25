"use strict";
(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["rangeion"],{

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
    $(this.shadowRoot).ionRangeSlider();
  }

  _change() {
    this.value = this._input.value;
    this._sendThrottle();
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<input
			@input='${this._change}'
			type='text'
			min='${this.min}'
			max='${this.max}'
			step='${this.step}'
      value='${this.value}'
			class='js-range-slider ${this.class}'>`;
  }
}

customElements.define("litter-rangeion", RangeIon);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2Vpb24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDeEI7QUFDQztBQUN1Qjs7QUFFaEMsdUJBQXVCLCtDQUFRO0FBQ3RDO0FBQ0EsYUFBYSxjQUFjO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxxQ0FBSTtBQUNmLGFBQWEsYUFBYTtBQUMxQjtBQUNBLFVBQVUsU0FBUztBQUNuQixVQUFVLFNBQVM7QUFDbkIsV0FBVyxVQUFVO0FBQ3JCLGVBQWUsV0FBVztBQUMxQiw0QkFBNEIsV0FBVztBQUN2QztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ3VDO0FBQ1A7QUFDakI7QUFDQzs7QUFFVCx1QkFBdUIsMkNBQVU7QUFDeEMsbUJBQW1CLHlDQUFHOztBQUV0QjtBQUNBLGFBQWEsY0FBYztBQUMzQixZQUFZLGNBQWM7QUFDMUIsYUFBYSxjQUFjO0FBQzNCLGdCQUFnQixjQUFjO0FBQzlCLFVBQVUsY0FBYztBQUN4QixZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7QUMxREE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2NvbXBvbmVudHMvcmFuZ2UtaW9uLmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2lucHV0LmpzIiwid2VicGFjazovL2xpdHRlci9leHRlcm5hbCB2YXIgXCJTaGlueVwiIiwid2VicGFjazovL2xpdHRlci9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IFwiU2hpbnlcIjtcbmltcG9ydCBcImpRdWVyeVwiO1xuaW1wb3J0IHsgTGl0SW5wdXQgfSBmcm9tIFwiLi4vaW5wdXQuanNcIjtcblxuZXhwb3J0IGNsYXNzIFJhbmdlSW9uIGV4dGVuZHMgTGl0SW5wdXQge1xuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICB2YWx1ZTogeyB0eXBlOiBOdW1iZXIgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuX2lucHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICAkKHRoaXMuc2hhZG93Um9vdCkuaW9uUmFuZ2VTbGlkZXIoKTtcbiAgfVxuXG4gIF9jaGFuZ2UoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuX2lucHV0LnZhbHVlO1xuICAgIHRoaXMuX3NlbmRUaHJvdHRsZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxpbnB1dFxuXHRcdFx0QGlucHV0PScke3RoaXMuX2NoYW5nZX0nXG5cdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0bWluPScke3RoaXMubWlufSdcblx0XHRcdG1heD0nJHt0aGlzLm1heH0nXG5cdFx0XHRzdGVwPScke3RoaXMuc3RlcH0nXG4gICAgICB2YWx1ZT0nJHt0aGlzLnZhbHVlfSdcblx0XHRcdGNsYXNzPSdqcy1yYW5nZS1zbGlkZXIgJHt0aGlzLmNsYXNzfSc+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXR0ZXItcmFuZ2Vpb25cIiwgUmFuZ2VJb24pO1xuIiwiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGJzNSB9IGZyb20gXCIuL2Nzcy9iczVcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcblxuZXhwb3J0IGNsYXNzIExpdElucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbYnM1XTtcblxuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNsYXNzOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHByaW9yaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIG1ldGE6IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wcmlvcml0eSA9IFwiZGVmZXJyZWRcIjtcbiAgICB0aGlzLmNsYXNzID0gXCJcIjtcbiAgICB0aGlzLm1ldGEgPSB7fTtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICB9XG5cbiAgX3NlbmQoKSB7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIGxldCBjYiA9IGV2YWwodGhpcy5jYWxsYmFjayk7XG4gICAgICBjYih0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIG1ldGE6IHRoaXMubWV0YSxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pZCkge1xuICAgICAgZGF0YS5pZCA9IHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShcbiAgICAgIHRoaXMubmFtZSArIFwiOmxpdHRlci5wYXJzZVwiLFxuICAgICAgZGF0YSxcbiAgICAgIHtcbiAgICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICB9LFxuICAgICk7XG4gIH1cblxuICBfc2VuZFRocm90dGxlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZW5kKCk7XG4gICAgfSwgMjUwKTtcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=