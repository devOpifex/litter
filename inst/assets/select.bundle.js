"use strict";
(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["select"],{

/***/ "./srcjs/components/select.js":
/*!************************************!*\
  !*** ./srcjs/components/select.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _css_bs5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/bs5 */ "./srcjs/css/bs5.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__);





class Select extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
	static styles = [_css_bs5__WEBPACK_IMPORTED_MODULE_1__.bs5]

	static properties = {
		name: {type: String},
		id: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.props = {};
		this.id = null;
	}
	
	render() {
		return lit__WEBPACK_IMPORTED_MODULE_0__.html`<select
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			class='form-select'>
			<slot></slot>
		</select>`;
	}
}

window.customElements.define('litter-select', Select);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/select.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ047QUFDbEI7QUFDQzs7QUFFVCxxQkFBcUIsMkNBQVU7QUFDdEMsa0JBQWtCLHlDQUFHOztBQUVyQjtBQUNBLFNBQVMsYUFBYTtBQUN0QixPQUFPLGFBQWE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUNBQUk7QUFDYixXQUFXLFVBQVU7QUFDckIsU0FBUyxRQUFRO0FBQ2pCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQy9CQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvY29tcG9uZW50cy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcIlNoaW55XCIiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tICdsaXQnO1xuaW1wb3J0IHsgYnM1IH0gZnJvbSAnLi4vY3NzL2JzNSc7XG5pbXBvcnQgJ1NoaW55JztcbmltcG9ydCAnalF1ZXJ5JztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdCBleHRlbmRzIExpdEVsZW1lbnQge1xuXHRzdGF0aWMgc3R5bGVzID0gW2JzNV1cblxuXHRzdGF0aWMgcHJvcGVydGllcyA9IHtcblx0XHRuYW1lOiB7dHlwZTogU3RyaW5nfSxcblx0XHRpZDoge3R5cGU6IFN0cmluZ30sXG5cdFx0cHJvcHM6IHt9XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucHJvcHMgPSB7fTtcblx0XHR0aGlzLmlkID0gbnVsbDtcblx0fVxuXHRcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiBodG1sYDxzZWxlY3Rcblx0XHRcdG5hbWU9JyR7dGhpcy5uYW1lfSdcblx0XHRcdGlkPScke3RoaXMuaWR9J1xuXHRcdFx0cHJvcHM9JyR7dGhpcy5wcm9wc30nXG5cdFx0XHRjbGFzcz0nZm9ybS1zZWxlY3QnPlxuXHRcdFx0PHNsb3Q+PC9zbG90PlxuXHRcdDwvc2VsZWN0PmA7XG5cdH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGl0dGVyLXNlbGVjdCcsIFNlbGVjdCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==