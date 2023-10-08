(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["textarea"],{

/***/ "./srcjs/components/textarea.js":
/*!**************************************!*\
  !*** ./srcjs/components/textarea.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextArea": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");





class TextArea extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  _change() {
    this.value = this.shadowRoot.querySelector("textarea").value;
    this._sendThrottle();
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<textarea
			@keyup='${this._change}'
			type='text'
			class='form-control ${this.class}' 
			placeholder='${this.placeholder}'
			.value='${this.value}'></textarea>`;
  }
}

customElements.define("litter-textarea", TextArea);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/textarea.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDeEI7QUFDQztBQUN1Qjs7QUFFaEMsdUJBQXVCLCtDQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxxQ0FBSTtBQUNmLGFBQWEsYUFBYTtBQUMxQjtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDLGtCQUFrQixpQkFBaUI7QUFDbkMsYUFBYSxXQUFXO0FBQ3hCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCdUM7QUFDSjtBQUNwQjtBQUNDO0FBQ0s7O0FBRWQsdUJBQXVCLDJDQUFVO0FBQ3hDLG1CQUFtQixnREFBTTs7QUFFekI7QUFDQSxhQUFhLGNBQWM7QUFDM0IsWUFBWSxjQUFjO0FBQzFCLGFBQWEsY0FBYztBQUMzQixnQkFBZ0IsY0FBYztBQUM5QixnQkFBZ0IsY0FBYztBQUM5QixVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBLHFCQUFxQixTQUFTO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsR0FBRztBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ2hDRDs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvdXBkYXRlLmpzIiwid2VicGFjazovL2xpdHRlci9leHRlcm5hbCB2YXIgXCJTaGlueVwiIiwid2VicGFjazovL2xpdHRlci9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IFwiU2hpbnlcIjtcbmltcG9ydCBcImpRdWVyeVwiO1xuaW1wb3J0IHsgTGl0SW5wdXQgfSBmcm9tIFwiLi4vaW5wdXQuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRleHRBcmVhIGV4dGVuZHMgTGl0SW5wdXQge1xuICBfY2hhbmdlKCkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpLnZhbHVlO1xuICAgIHRoaXMuX3NlbmRUaHJvdHRsZSgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDx0ZXh0YXJlYVxuXHRcdFx0QGtleXVwPScke3RoaXMuX2NoYW5nZX0nXG5cdFx0XHR0eXBlPSd0ZXh0J1xuXHRcdFx0Y2xhc3M9J2Zvcm0tY29udHJvbCAke3RoaXMuY2xhc3N9JyBcblx0XHRcdHBsYWNlaG9sZGVyPScke3RoaXMucGxhY2Vob2xkZXJ9J1xuXHRcdFx0LnZhbHVlPScke3RoaXMudmFsdWV9Jz48L3RleHRhcmVhPmA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl0dGVyLXRleHRhcmVhXCIsIFRleHRBcmVhKTtcbiIsImltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBnZXRCczUgfSBmcm9tIFwiLi9jc3MvYnM1XCI7XG5pbXBvcnQgXCJTaGlueVwiO1xuaW1wb3J0IFwialF1ZXJ5XCI7XG5pbXBvcnQgXCIuL3VwZGF0ZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTGl0SW5wdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IFtnZXRCczUoKV07XG5cbiAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgdmFsdWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjbGFzczogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwcmlvcml0eTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjYWxsYmFjazogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBzZW5kX29uX2Nvbm5lY3Q6IHsgXG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgY29udmVydGVyOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWV0YToge30sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnByaW9yaXR5ID0gXCJkZWZlcnJlZFwiO1xuICAgIHRoaXMuY2xhc3MgPSBcIlwiO1xuICAgIHRoaXMubWV0YSA9IHt9O1xuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5jYWxsYmFjayA9IFwiXCI7XG4gICAgdGhpcy5zZW5kX29uX2Nvbm5lY3QgPSB0cnVlO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuX3NlbmRPbkNvbm5lY3QoKTtcbiAgfVxuXG4gIF9zZW5kKCkge1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICBsZXQgY2IgPSBldmFsKHRoaXMuY2FsbGJhY2spO1xuICAgICAgY2IodGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmFtZSA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBwcm9wczogdGhpcy5tZXRhLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlkKSB7XG4gICAgICBkYXRhLmlkID0gdGhpcy5pZDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgdGhpcy5uYW1lICsgXCI6bGl0dGVyLnBhcnNlXCIsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaGlueSBub3QgY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIF9zZW5kVGhyb3R0bGUoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3NlbmQoKTtcbiAgICB9LCAyNTApO1xuICB9XG5cbiAgX3NlbmRPbkNvbm5lY3QoKSB7XG4gICAgaWYoIXRoaXMuc2VuZF9vbl9jb25uZWN0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zZW5kX29uX2Nvbm5lY3QpXG5cbiAgICAkKGRvY3VtZW50KS5vbihcInNoaW55OmNvbm5lY3RlZFwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5fc2VuZCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBzZWxlY3QgPSAobXNnKSA9PiB7XG4gIGlmIChtc2cubmFtZSkge1xuICAgIHJldHVybiBgW25hbWU9JyR7bXNnLm5hbWV9J11gO1xuICB9XG5cbiAgaWYgKG1zZy5zZWwpIHtcbiAgICByZXR1cm4gc2VsO1xuICB9XG5cbiAgaWYgKG1zZy5pZCkge1xuICAgIHJldHVybiBgIyR7aWR9YDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJsaXR0ZXItdXBkYXRlLWlucHV0XCIsIChtc2cpID0+IHtcbiAgbGV0IHRhcmdldCA9IHNlbGVjdChtc2cpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMobXNnLnByb3BzKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gbXNnLnByb3BzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH1cblxuICAgICQodGFyZ2V0KS5hdHRyKGtleSwgdmFsdWUpO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=