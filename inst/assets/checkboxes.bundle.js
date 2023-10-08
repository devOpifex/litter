(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["checkboxes"],{

/***/ "./srcjs/components/checkboxes.js":
/*!****************************************!*\
  !*** ./srcjs/components/checkboxes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkboxes": () => (/* binding */ Checkboxes)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");





class Checkboxes extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  static properties = {
    options: { type: Array },
    value: { type: Array },
  };

  constructor() {
    super();
    this.options = [];
    this.value = [];
  }

  updated() {
    this.value.map((val) => {
      this.shadowRoot.querySelector(`input[value='${val}']`).checked = true;
    });
    this._send();
  }

  _setValue() {
    let inputs = this.renderRoot.querySelectorAll("input");
    let values = Array.from(inputs).map((input) => {
      if (input.checked) {
        return (input.value);
      }
    }).filter((el) => el != undefined);

    this.value = values;
  }

  _change() {
    this._setValue();
  }

  render() {
    const opts = this.options.map((el) =>
      lit__WEBPACK_IMPORTED_MODULE_0__.html`<div class="form-check ${this.class}">
        <input class="form-check-input" type="checkbox" value="${el}"/>
        <label class="form-check-label">${el}</label>
      </div>`
    );
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<div class="checkboxes-wrapper"
			@change=${this._change}>
      ${opts}
		</div>`;
  }
}

customElements.define("litter-checkboxes", Checkboxes);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/checkboxes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3hlcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUN4QjtBQUNDO0FBQ3VCOztBQUVoQyx5QkFBeUIsK0NBQVE7QUFDeEM7QUFDQSxlQUFlLGFBQWE7QUFDNUIsYUFBYSxhQUFhO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxJQUFJO0FBQ3hELEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0scUNBQUksMEJBQTBCLFdBQVc7QUFDL0MsaUVBQWlFLEdBQUc7QUFDcEUsMENBQTBDLEdBQUc7QUFDN0M7QUFDQTtBQUNBLFdBQVcscUNBQUk7QUFDZixhQUFhLGFBQWE7QUFDMUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckR1QztBQUNKO0FBQ3BCO0FBQ0M7QUFDSzs7QUFFZCx1QkFBdUIsMkNBQVU7QUFDeEMsbUJBQW1CLGdEQUFNOztBQUV6QjtBQUNBLGFBQWEsY0FBYztBQUMzQixZQUFZLGNBQWM7QUFDMUIsYUFBYSxjQUFjO0FBQzNCLGdCQUFnQixjQUFjO0FBQzlCLGdCQUFnQixjQUFjO0FBQzlCLFVBQVUsY0FBYztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7Ozs7OztBQzVGQTtBQUNBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxHQUFHO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7O0FDaENEOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvY29tcG9uZW50cy9jaGVja2JveGVzLmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2lucHV0LmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCB7IExpdElucHV0IH0gZnJvbSBcIi4uL2lucHV0LmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveGVzIGV4dGVuZHMgTGl0SW5wdXQge1xuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICBvcHRpb25zOiB7IHR5cGU6IEFycmF5IH0sXG4gICAgdmFsdWU6IHsgdHlwZTogQXJyYXkgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgfVxuXG4gIHVwZGF0ZWQoKSB7XG4gICAgdGhpcy52YWx1ZS5tYXAoKHZhbCkgPT4ge1xuICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3ZhbHVlPScke3ZhbH0nXWApLmNoZWNrZWQgPSB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMuX3NlbmQoKTtcbiAgfVxuXG4gIF9zZXRWYWx1ZSgpIHtcbiAgICBsZXQgaW5wdXRzID0gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICBsZXQgdmFsdWVzID0gQXJyYXkuZnJvbShpbnB1dHMpLm1hcCgoaW5wdXQpID0+IHtcbiAgICAgIGlmIChpbnB1dC5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiAoaW5wdXQudmFsdWUpO1xuICAgICAgfVxuICAgIH0pLmZpbHRlcigoZWwpID0+IGVsICE9IHVuZGVmaW5lZCk7XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWVzO1xuICB9XG5cbiAgX2NoYW5nZSgpIHtcbiAgICB0aGlzLl9zZXRWYWx1ZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IG9wdHMgPSB0aGlzLm9wdGlvbnMubWFwKChlbCkgPT5cbiAgICAgIGh0bWxgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgJHt0aGlzLmNsYXNzfVwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCIke2VsfVwiLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiPiR7ZWx9PC9sYWJlbD5cbiAgICAgIDwvZGl2PmBcbiAgICApO1xuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJjaGVja2JveGVzLXdyYXBwZXJcIlxuXHRcdFx0QGNoYW5nZT0ke3RoaXMuX2NoYW5nZX0+XG4gICAgICAke29wdHN9XG5cdFx0PC9kaXY+YDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXR0ZXItY2hlY2tib3hlc1wiLCBDaGVja2JveGVzKTtcbiIsImltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBnZXRCczUgfSBmcm9tIFwiLi9jc3MvYnM1XCI7XG5pbXBvcnQgXCJTaGlueVwiO1xuaW1wb3J0IFwialF1ZXJ5XCI7XG5pbXBvcnQgXCIuL3VwZGF0ZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTGl0SW5wdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IFtnZXRCczUoKV07XG5cbiAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgdmFsdWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjbGFzczogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwcmlvcml0eTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjYWxsYmFjazogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBzZW5kX29uX2Nvbm5lY3Q6IHsgXG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgY29udmVydGVyOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWV0YToge30sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnByaW9yaXR5ID0gXCJkZWZlcnJlZFwiO1xuICAgIHRoaXMuY2xhc3MgPSBcIlwiO1xuICAgIHRoaXMubWV0YSA9IHt9O1xuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5jYWxsYmFjayA9IFwiXCI7XG4gICAgdGhpcy5zZW5kX29uX2Nvbm5lY3QgPSB0cnVlO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuX3NlbmRPbkNvbm5lY3QoKTtcbiAgfVxuXG4gIF9zZW5kKCkge1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICBsZXQgY2IgPSBldmFsKHRoaXMuY2FsbGJhY2spO1xuICAgICAgY2IodGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmFtZSA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBwcm9wczogdGhpcy5tZXRhLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlkKSB7XG4gICAgICBkYXRhLmlkID0gdGhpcy5pZDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgdGhpcy5uYW1lICsgXCI6bGl0dGVyLnBhcnNlXCIsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaGlueSBub3QgY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIF9zZW5kVGhyb3R0bGUoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3NlbmQoKTtcbiAgICB9LCAyNTApO1xuICB9XG5cbiAgX3NlbmRPbkNvbm5lY3QoKSB7XG4gICAgaWYoIXRoaXMuc2VuZF9vbl9jb25uZWN0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zZW5kX29uX2Nvbm5lY3QpXG5cbiAgICAkKGRvY3VtZW50KS5vbihcInNoaW55OmNvbm5lY3RlZFwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5fc2VuZCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBzZWxlY3QgPSAobXNnKSA9PiB7XG4gIGlmIChtc2cubmFtZSkge1xuICAgIHJldHVybiBgW25hbWU9JyR7bXNnLm5hbWV9J11gO1xuICB9XG5cbiAgaWYgKG1zZy5zZWwpIHtcbiAgICByZXR1cm4gc2VsO1xuICB9XG5cbiAgaWYgKG1zZy5pZCkge1xuICAgIHJldHVybiBgIyR7aWR9YDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJsaXR0ZXItdXBkYXRlLWlucHV0XCIsIChtc2cpID0+IHtcbiAgbGV0IHRhcmdldCA9IHNlbGVjdChtc2cpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMobXNnLnByb3BzKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gbXNnLnByb3BzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH1cblxuICAgICQodGFyZ2V0KS5hdHRyKGtleSwgdmFsdWUpO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=