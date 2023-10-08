(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["datalist"],{

/***/ "./srcjs/components/datalist.js":
/*!**************************************!*\
  !*** ./srcjs/components/datalist.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Datalist": () => (/* binding */ Datalist)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");





class Datalist extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  static properties = {
    options: { type: Array },
    placeholder: { type: String },
    endpoint: { type: String },
  };

  constructor() {
    super();
    this.options = [];
    this.endpoint = "";
    this.timeout;
    this.lastSearch = "";
  }

  firstUpdated() {
    this._sendOnConnect();

    if (!this.value) {
      return;
    }

    this.shadowRoot.querySelector("input").value = this.value;
  }

  updated() {
    if (!this.value) {
      return;
    }

    this.shadowRoot.querySelector("input").value = this.value;
    this._send();
  }

  _setValue() {
    this.value = this.shadowRoot.querySelector("input").value;
  }

  _change() {
    const value = this.shadowRoot.querySelector("input").value;
    this.shadowRoot.querySelector("input").blur();

    let found = this.options.filter((opt) => {
      return opt.value == value;
    });

    if (found.length == 0) {
      return;
    }

    this._setValue();
  }

  _input() {
    const value = this.shadowRoot.querySelector("input").value;

    let found = this.options.filter((opt) => {
      return opt.value == value;
    });

    if (found.length == 0) {
      return;
    }

    this._setValue();
  }

  _keyup(event) {
    if (!this.endpoint || this.endpoint == "") {
      return;
    }

    const value = event.currentTarget.value;

    if (value == this.lastSearch) {
      return;
    }

    this.lastSearch = value;

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      fetch(`${this.endpoint}&query=${encodeURIComponent(value)}`)
        .then((res) => res.json())
        .then((data) => {
          this.options = data;
        });
    }, 150);
  }

  render() {
    const opts = this.options.map((el) =>
      lit__WEBPACK_IMPORTED_MODULE_0__.html`<option value="${el.value}">${el.label}</option<`
    );

    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<input @input=${this._input} @change=${this._change} @keyup=${this._keyup} placeholder="${this.placeholder}" list="datalist" class='form-control ${this.class}'/>
    <datalist id="datalist">
      ${opts}
		</datalist>`;
  }
}

customElements.define("litter-datalist", Datalist);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/datalist.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWxpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDeEI7QUFDQztBQUN1Qjs7QUFFaEMsdUJBQXVCLCtDQUFRO0FBQ3RDO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLG1CQUFtQixjQUFjO0FBQ2pDLGdCQUFnQixjQUFjO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxlQUFlLGNBQWMsU0FBUywwQkFBMEI7QUFDaEU7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxxQ0FBSSxrQkFBa0IsU0FBUyxJQUFJLFNBQVM7QUFDbEQ7O0FBRUEsV0FBVyxxQ0FBSSxpQkFBaUIsYUFBYSxVQUFVLGNBQWMsU0FBUyxhQUFhLGVBQWUsaUJBQWlCLHdDQUF3QyxXQUFXO0FBQzlLO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUd1QztBQUNKO0FBQ3BCO0FBQ0M7QUFDSzs7QUFFZCx1QkFBdUIsMkNBQVU7QUFDeEMsbUJBQW1CLGdEQUFNOztBQUV6QjtBQUNBLGFBQWEsY0FBYztBQUMzQixZQUFZLGNBQWM7QUFDMUIsYUFBYSxjQUFjO0FBQzNCLGdCQUFnQixjQUFjO0FBQzlCLGdCQUFnQixjQUFjO0FBQzlCLFVBQVUsY0FBYztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxHQUFHO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaENEOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvY29tcG9uZW50cy9kYXRhbGlzdC5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcIlNoaW55XCIiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgXCJTaGlueVwiO1xuaW1wb3J0IFwialF1ZXJ5XCI7XG5pbXBvcnQgeyBMaXRJbnB1dCB9IGZyb20gXCIuLi9pbnB1dC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgRGF0YWxpc3QgZXh0ZW5kcyBMaXRJbnB1dCB7XG4gIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgIG9wdGlvbnM6IHsgdHlwZTogQXJyYXkgfSxcbiAgICBwbGFjZWhvbGRlcjogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBlbmRwb2ludDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuZW5kcG9pbnQgPSBcIlwiO1xuICAgIHRoaXMudGltZW91dDtcbiAgICB0aGlzLmxhc3RTZWFyY2ggPSBcIlwiO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuX3NlbmRPbkNvbm5lY3QoKTtcblxuICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUgPSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgdXBkYXRlZCgpIHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB0aGlzLl9zZW5kKCk7XG4gIH1cblxuICBfc2V0VmFsdWUoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWU7XG4gIH1cblxuICBfY2hhbmdlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmJsdXIoKTtcblxuICAgIGxldCBmb3VuZCA9IHRoaXMub3B0aW9ucy5maWx0ZXIoKG9wdCkgPT4ge1xuICAgICAgcmV0dXJuIG9wdC52YWx1ZSA9PSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIGlmIChmb3VuZC5sZW5ndGggPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NldFZhbHVlKCk7XG4gIH1cblxuICBfaW5wdXQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlO1xuXG4gICAgbGV0IGZvdW5kID0gdGhpcy5vcHRpb25zLmZpbHRlcigob3B0KSA9PiB7XG4gICAgICByZXR1cm4gb3B0LnZhbHVlID09IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgaWYgKGZvdW5kLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fc2V0VmFsdWUoKTtcbiAgfVxuXG4gIF9rZXl1cChldmVudCkge1xuICAgIGlmICghdGhpcy5lbmRwb2ludCB8fCB0aGlzLmVuZHBvaW50ID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG5cbiAgICBpZiAodmFsdWUgPT0gdGhpcy5sYXN0U2VhcmNoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0U2VhcmNoID0gdmFsdWU7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmV0Y2goYCR7dGhpcy5lbmRwb2ludH0mcXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQodmFsdWUpfWApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfSwgMTUwKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBvcHRzID0gdGhpcy5vcHRpb25zLm1hcCgoZWwpID0+XG4gICAgICBodG1sYDxvcHRpb24gdmFsdWU9XCIke2VsLnZhbHVlfVwiPiR7ZWwubGFiZWx9PC9vcHRpb248YFxuICAgICk7XG5cbiAgICByZXR1cm4gaHRtbGA8aW5wdXQgQGlucHV0PSR7dGhpcy5faW5wdXR9IEBjaGFuZ2U9JHt0aGlzLl9jaGFuZ2V9IEBrZXl1cD0ke3RoaXMuX2tleXVwfSBwbGFjZWhvbGRlcj1cIiR7dGhpcy5wbGFjZWhvbGRlcn1cIiBsaXN0PVwiZGF0YWxpc3RcIiBjbGFzcz0nZm9ybS1jb250cm9sICR7dGhpcy5jbGFzc30nLz5cbiAgICA8ZGF0YWxpc3QgaWQ9XCJkYXRhbGlzdFwiPlxuICAgICAgJHtvcHRzfVxuXHRcdDwvZGF0YWxpc3Q+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXR0ZXItZGF0YWxpc3RcIiwgRGF0YWxpc3QpO1xuIiwiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGdldEJzNSB9IGZyb20gXCIuL2Nzcy9iczVcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCBcIi4vdXBkYXRlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXRJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2dldEJzNSgpXTtcblxuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNsYXNzOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHByaW9yaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNhbGxiYWNrOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHNlbmRfb25fY29ubmVjdDogeyBcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBjb252ZXJ0ZXI6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRhOiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBcImRlZmVycmVkXCI7XG4gICAgdGhpcy5jbGFzcyA9IFwiXCI7XG4gICAgdGhpcy5tZXRhID0ge307XG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmNhbGxiYWNrID0gXCJcIjtcbiAgICB0aGlzLnNlbmRfb25fY29ubmVjdCA9IHRydWU7XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5fc2VuZE9uQ29ubmVjdCgpO1xuICB9XG5cbiAgX3NlbmQoKSB7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIGxldCBjYiA9IGV2YWwodGhpcy5jYWxsYmFjayk7XG4gICAgICBjYih0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYW1lID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIHByb3BzOiB0aGlzLm1ldGEsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgIGRhdGEuaWQgPSB0aGlzLmlkO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBTaGlueS5zZXRJbnB1dFZhbHVlKFxuICAgICAgICB0aGlzLm5hbWUgKyBcIjpsaXR0ZXIucGFyc2VcIixcbiAgICAgICAgZGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcInNoaW55IG5vdCBjb25uZWN0ZWRcIik7XG4gICAgfVxuICB9XG5cbiAgX3NlbmRUaHJvdHRsZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fc2VuZCgpO1xuICAgIH0sIDI1MCk7XG4gIH1cblxuICBfc2VuZE9uQ29ubmVjdCgpIHtcbiAgICBpZighdGhpcy5zZW5kX29uX2Nvbm5lY3QpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbmRfb25fY29ubmVjdClcblxuICAgICQoZG9jdW1lbnQpLm9uKFwic2hpbnk6Y29ubmVjdGVkXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLl9zZW5kKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IHNlbGVjdCA9IChtc2cpID0+IHtcbiAgaWYgKG1zZy5uYW1lKSB7XG4gICAgcmV0dXJuIGBbbmFtZT0nJHttc2cubmFtZX0nXWA7XG4gIH1cblxuICBpZiAobXNnLnNlbCkge1xuICAgIHJldHVybiBzZWw7XG4gIH1cblxuICBpZiAobXNnLmlkKSB7XG4gICAgcmV0dXJuIGAjJHtpZH1gO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImxpdHRlci11cGRhdGUtaW5wdXRcIiwgKG1zZykgPT4ge1xuICBsZXQgdGFyZ2V0ID0gc2VsZWN0KG1zZyk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhtc2cucHJvcHMpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBtc2cucHJvcHNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgJCh0YXJnZXQpLmF0dHIoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==