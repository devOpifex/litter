"use strict";
(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["range"],{

/***/ "./srcjs/components/range.js":
/*!***********************************!*\
  !*** ./srcjs/components/range.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Range": () => (/* binding */ Range)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _css_bs5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/bs5 */ "./srcjs/css/bs5.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__);





class Range extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
	static styles = [_css_bs5__WEBPACK_IMPORTED_MODULE_1__.bs5]

	static properties = {
		name: {type: String},
		id: {type: String},
		min: {type: String},
		max: {type: String},
		step: {type: String},
		value: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.props = {};
		this.id = null;
		this.min = null;
		this.max = null;
		this.step = null;
		this.value = null;
	}
	
	firstUpdated(){
		this._input = this.shadowRoot.querySelector('input');
	}

	_sendValue() {
		this.value = this._input.value;

		window.Shiny.setInputValue(
			this.name + ':litter.parse', 
			{
				props: this.props, 
				value: parseInt(this.value),
				id: this.id
			},
			{
				priority: 'event'
			}
		);
	}
	
	render() {
		return lit__WEBPACK_IMPORTED_MODULE_0__.html`<input
			@input='${this._sendValue}'
			type='range'
			name='${this.name}'
			id='${this.id}'
			min='${this.min}'
			max='${this.max}'
			step='${this.step}'
			.value='${this.value}'
			props='${this.props}'
			class='form-range'>`;
	}
}

window.customElements.define('litter-range', Range);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/range.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTjtBQUNsQjtBQUNDOztBQUVULG9CQUFvQiwyQ0FBVTtBQUNyQyxrQkFBa0IseUNBQUc7O0FBRXJCO0FBQ0EsU0FBUyxhQUFhO0FBQ3RCLE9BQU8sYUFBYTtBQUNwQixRQUFRLGFBQWE7QUFDckIsUUFBUSxhQUFhO0FBQ3JCLFNBQVMsYUFBYTtBQUN0QixVQUFVLGFBQWE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUNBQUk7QUFDYixhQUFhLGdCQUFnQjtBQUM3QjtBQUNBLFdBQVcsVUFBVTtBQUNyQixTQUFTLFFBQVE7QUFDakIsVUFBVSxTQUFTO0FBQ25CLFVBQVUsU0FBUztBQUNuQixXQUFXLFVBQVU7QUFDckIsYUFBYSxXQUFXO0FBQ3hCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDL0RBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9jb21wb25lbnRzL3JhbmdlLmpzIiwid2VicGFjazovL2xpdHRlci9leHRlcm5hbCB2YXIgXCJTaGlueVwiIiwid2VicGFjazovL2xpdHRlci9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCB7IGJzNSB9IGZyb20gJy4uL2Nzcy9iczUnO1xuaW1wb3J0ICdTaGlueSc7XG5pbXBvcnQgJ2pRdWVyeSc7XG5cbmV4cG9ydCBjbGFzcyBSYW5nZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXHRzdGF0aWMgc3R5bGVzID0gW2JzNV1cblxuXHRzdGF0aWMgcHJvcGVydGllcyA9IHtcblx0XHRuYW1lOiB7dHlwZTogU3RyaW5nfSxcblx0XHRpZDoge3R5cGU6IFN0cmluZ30sXG5cdFx0bWluOiB7dHlwZTogU3RyaW5nfSxcblx0XHRtYXg6IHt0eXBlOiBTdHJpbmd9LFxuXHRcdHN0ZXA6IHt0eXBlOiBTdHJpbmd9LFxuXHRcdHZhbHVlOiB7dHlwZTogU3RyaW5nfSxcblx0XHRwcm9wczoge31cblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xuXHRcdHRoaXMuaWQgPSBudWxsO1xuXHRcdHRoaXMubWluID0gbnVsbDtcblx0XHR0aGlzLm1heCA9IG51bGw7XG5cdFx0dGhpcy5zdGVwID0gbnVsbDtcblx0XHR0aGlzLnZhbHVlID0gbnVsbDtcblx0fVxuXHRcblx0Zmlyc3RVcGRhdGVkKCl7XG5cdFx0dGhpcy5faW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblx0fVxuXG5cdF9zZW5kVmFsdWUoKSB7XG5cdFx0dGhpcy52YWx1ZSA9IHRoaXMuX2lucHV0LnZhbHVlO1xuXG5cdFx0d2luZG93LlNoaW55LnNldElucHV0VmFsdWUoXG5cdFx0XHR0aGlzLm5hbWUgKyAnOmxpdHRlci5wYXJzZScsIFxuXHRcdFx0e1xuXHRcdFx0XHRwcm9wczogdGhpcy5wcm9wcywgXG5cdFx0XHRcdHZhbHVlOiBwYXJzZUludCh0aGlzLnZhbHVlKSxcblx0XHRcdFx0aWQ6IHRoaXMuaWRcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHByaW9yaXR5OiAnZXZlbnQnXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXHRcblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiBodG1sYDxpbnB1dFxuXHRcdFx0QGlucHV0PScke3RoaXMuX3NlbmRWYWx1ZX0nXG5cdFx0XHR0eXBlPSdyYW5nZSdcblx0XHRcdG5hbWU9JyR7dGhpcy5uYW1lfSdcblx0XHRcdGlkPScke3RoaXMuaWR9J1xuXHRcdFx0bWluPScke3RoaXMubWlufSdcblx0XHRcdG1heD0nJHt0aGlzLm1heH0nXG5cdFx0XHRzdGVwPScke3RoaXMuc3RlcH0nXG5cdFx0XHQudmFsdWU9JyR7dGhpcy52YWx1ZX0nXG5cdFx0XHRwcm9wcz0nJHt0aGlzLnByb3BzfSdcblx0XHRcdGNsYXNzPSdmb3JtLXJhbmdlJz5gO1xuXHR9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xpdHRlci1yYW5nZScsIFJhbmdlKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gU2hpbnk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9