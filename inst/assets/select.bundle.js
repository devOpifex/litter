(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["select"],{

/***/ "./srcjs/components/select.js":
/*!************************************!*\
  !*** ./srcjs/components/select.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");





class Select extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  static properties = {
    options: { type: Array },
  };

  constructor() {
    super();
    this.options = [];
  }

  firstUpdated() {
    this.shadowRoot.querySelector("select").value = this.value;
    this._sendOnConnect();
  }

  updated() {
    this.shadowRoot.querySelector("select").value = this.value;
    this._send();
  }

  _setValue() {
    this.value = this.renderRoot.querySelector("select").value;
  }

  _change() {
    this._setValue();
  }

  render() {
    const opts = this.options.map((el) =>
      lit__WEBPACK_IMPORTED_MODULE_0__.html`<option value="${el.value}">${el.label}</option>`
    );
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<select
			class='form-select ${this.class}' @change=${this._change}>
      ${opts}
		</select>`;
  }
}

customElements.define("litter-select", Select);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/select.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3hCO0FBQ0M7QUFDdUI7O0FBRWhDLHFCQUFxQiwrQ0FBUTtBQUNwQztBQUNBLGVBQWUsYUFBYTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLHFDQUFJLGtCQUFrQixTQUFTLElBQUksU0FBUztBQUNsRDtBQUNBLFdBQVcscUNBQUk7QUFDZix3QkFBd0IsV0FBVyxZQUFZLGFBQWE7QUFDNUQsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUN1QztBQUNKO0FBQ3BCO0FBQ0M7QUFDSzs7QUFFZCx1QkFBdUIsMkNBQVU7QUFDeEMsbUJBQW1CLGdEQUFNOztBQUV6QjtBQUNBLGFBQWEsY0FBYztBQUMzQixZQUFZLGNBQWM7QUFDMUIsYUFBYSxjQUFjO0FBQzNCLGdCQUFnQixjQUFjO0FBQzlCLGdCQUFnQixjQUFjO0FBQzlCLFVBQVUsY0FBYztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxHQUFHO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaENEOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvdXBkYXRlLmpzIiwid2VicGFjazovL2xpdHRlci9leHRlcm5hbCB2YXIgXCJTaGlueVwiIiwid2VicGFjazovL2xpdHRlci9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IFwiU2hpbnlcIjtcbmltcG9ydCBcImpRdWVyeVwiO1xuaW1wb3J0IHsgTGl0SW5wdXQgfSBmcm9tIFwiLi4vaW5wdXQuanNcIjtcblxuZXhwb3J0IGNsYXNzIFNlbGVjdCBleHRlbmRzIExpdElucHV0IHtcbiAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgb3B0aW9uczogeyB0eXBlOiBBcnJheSB9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5vcHRpb25zID0gW107XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuX3NlbmRPbkNvbm5lY3QoKTtcbiAgfVxuXG4gIHVwZGF0ZWQoKSB7XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuX3NlbmQoKTtcbiAgfVxuXG4gIF9zZXRWYWx1ZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XG4gIH1cblxuICBfY2hhbmdlKCkge1xuICAgIHRoaXMuX3NldFZhbHVlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucy5tYXAoKGVsKSA9PlxuICAgICAgaHRtbGA8b3B0aW9uIHZhbHVlPVwiJHtlbC52YWx1ZX1cIj4ke2VsLmxhYmVsfTwvb3B0aW9uPmBcbiAgICApO1xuICAgIHJldHVybiBodG1sYDxzZWxlY3Rcblx0XHRcdGNsYXNzPSdmb3JtLXNlbGVjdCAke3RoaXMuY2xhc3N9JyBAY2hhbmdlPSR7dGhpcy5fY2hhbmdlfT5cbiAgICAgICR7b3B0c31cblx0XHQ8L3NlbGVjdD5gO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdHRlci1zZWxlY3RcIiwgU2VsZWN0KTtcbiIsImltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBnZXRCczUgfSBmcm9tIFwiLi9jc3MvYnM1XCI7XG5pbXBvcnQgXCJTaGlueVwiO1xuaW1wb3J0IFwialF1ZXJ5XCI7XG5pbXBvcnQgXCIuL3VwZGF0ZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTGl0SW5wdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IFtnZXRCczUoKV07XG5cbiAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgdmFsdWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjbGFzczogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwcmlvcml0eTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjYWxsYmFjazogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBzZW5kX29uX2Nvbm5lY3Q6IHsgXG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgY29udmVydGVyOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWV0YToge30sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnByaW9yaXR5ID0gXCJkZWZlcnJlZFwiO1xuICAgIHRoaXMuY2xhc3MgPSBcIlwiO1xuICAgIHRoaXMubWV0YSA9IHt9O1xuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5jYWxsYmFjayA9IFwiXCI7XG4gICAgdGhpcy5zZW5kX29uX2Nvbm5lY3QgPSB0cnVlO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuX3NlbmRPbkNvbm5lY3QoKTtcbiAgfVxuXG4gIF9zZW5kKCkge1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICBsZXQgY2IgPSBldmFsKHRoaXMuY2FsbGJhY2spO1xuICAgICAgY2IodGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmFtZSA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBwcm9wczogdGhpcy5tZXRhLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlkKSB7XG4gICAgICBkYXRhLmlkID0gdGhpcy5pZDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgdGhpcy5uYW1lICsgXCI6bGl0dGVyLnBhcnNlXCIsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaGlueSBub3QgY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIF9zZW5kVGhyb3R0bGUoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3NlbmQoKTtcbiAgICB9LCAyNTApO1xuICB9XG5cbiAgX3NlbmRPbkNvbm5lY3QoKSB7XG4gICAgaWYoIXRoaXMuc2VuZF9vbl9jb25uZWN0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zZW5kX29uX2Nvbm5lY3QpXG5cbiAgICAkKGRvY3VtZW50KS5vbihcInNoaW55OmNvbm5lY3RlZFwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5fc2VuZCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBzZWxlY3QgPSAobXNnKSA9PiB7XG4gIGlmIChtc2cubmFtZSkge1xuICAgIHJldHVybiBgW25hbWU9JyR7bXNnLm5hbWV9J11gO1xuICB9XG5cbiAgaWYgKG1zZy5zZWwpIHtcbiAgICByZXR1cm4gc2VsO1xuICB9XG5cbiAgaWYgKG1zZy5pZCkge1xuICAgIHJldHVybiBgIyR7aWR9YDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJsaXR0ZXItdXBkYXRlLWlucHV0XCIsIChtc2cpID0+IHtcbiAgbGV0IHRhcmdldCA9IHNlbGVjdChtc2cpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMobXNnLnByb3BzKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gbXNnLnByb3BzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH1cblxuICAgICQodGFyZ2V0KS5hdHRyKGtleSwgdmFsdWUpO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=