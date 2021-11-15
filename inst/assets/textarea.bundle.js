"use strict";
(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["textarea"],{

/***/ "./srcjs/components/textarea.js":
/*!**************************************!*\
  !*** ./srcjs/components/textarea.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextArea": () => (/* binding */ TextArea)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _css_bs5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/bs5 */ "./srcjs/css/bs5.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__);





class TextArea extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
	static styles = [_css_bs5__WEBPACK_IMPORTED_MODULE_1__.bs5]

	static properties = {
		class: {type: String},
		value: {type: String},
		name: {type: String},
		id: {type: String},
		return: {type: String},
		placeholder: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.return = 'enter';
		this._input = {};
		this.value = '';
		this.placeholder = '';
		this.props = {};
		this.id = null;
		this.class = null;
	}

	firstUpdated(){
		this._input = this.shadowRoot.querySelector('textarea');
	}

	_sendValue(event) {
		this.value = this._input.value;
		
		if(this.return == 'never')
			return;

		if(this.return == 'instant'){
			window.Shiny.setInputValue(
				this.name + ':litter.parse', 
				{
					props: this.props, 
					value: this.value,
					id: this.id
				},
				{
					priority: 'event'
				}
			);
			return;
		}
	}
	
	render() {
		return lit__WEBPACK_IMPORTED_MODULE_0__.html`<textarea
			@keyup='${this._sendValue}'
			type='text'
			class='form-control' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			placeholder='${this.placeholder}'
			.value='${this.value}'></textarea>`;
	}
}

window.customElements.define('litter-textarea', TextArea);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/textarea.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDWDtBQUNsQjtBQUNDOztBQUVULHVCQUF1QiwyQ0FBVTtBQUN4QyxrQkFBa0IseUNBQUc7O0FBRXJCO0FBQ0EsVUFBVSxhQUFhO0FBQ3ZCLFVBQVUsYUFBYTtBQUN2QixTQUFTLGFBQWE7QUFDdEIsT0FBTyxhQUFhO0FBQ3BCLFdBQVcsYUFBYTtBQUN4QixnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscUNBQUk7QUFDYixhQUFhLGdCQUFnQjtBQUM3QjtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFNBQVMsUUFBUTtBQUNqQixZQUFZLFdBQVc7QUFDdkIsa0JBQWtCLGlCQUFpQjtBQUNuQyxhQUFhLFdBQVc7QUFDeEI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNwRUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2NvbXBvbmVudHMvdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcIlNoaW55XCIiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGh0bWwsIGNzcywgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBiczUgfSBmcm9tICcuLi9jc3MvYnM1JztcbmltcG9ydCAnU2hpbnknO1xuaW1wb3J0ICdqUXVlcnknO1xuXG5leHBvcnQgY2xhc3MgVGV4dEFyZWEgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblx0c3RhdGljIHN0eWxlcyA9IFticzVdXG5cblx0c3RhdGljIHByb3BlcnRpZXMgPSB7XG5cdFx0Y2xhc3M6IHt0eXBlOiBTdHJpbmd9LFxuXHRcdHZhbHVlOiB7dHlwZTogU3RyaW5nfSxcblx0XHRuYW1lOiB7dHlwZTogU3RyaW5nfSxcblx0XHRpZDoge3R5cGU6IFN0cmluZ30sXG5cdFx0cmV0dXJuOiB7dHlwZTogU3RyaW5nfSxcblx0XHRwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZ30sXG5cdFx0cHJvcHM6IHt9XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMucmV0dXJuID0gJ2VudGVyJztcblx0XHR0aGlzLl9pbnB1dCA9IHt9O1xuXHRcdHRoaXMudmFsdWUgPSAnJztcblx0XHR0aGlzLnBsYWNlaG9sZGVyID0gJyc7XG5cdFx0dGhpcy5wcm9wcyA9IHt9O1xuXHRcdHRoaXMuaWQgPSBudWxsO1xuXHRcdHRoaXMuY2xhc3MgPSBudWxsO1xuXHR9XG5cblx0Zmlyc3RVcGRhdGVkKCl7XG5cdFx0dGhpcy5faW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcigndGV4dGFyZWEnKTtcblx0fVxuXG5cdF9zZW5kVmFsdWUoZXZlbnQpIHtcblx0XHR0aGlzLnZhbHVlID0gdGhpcy5faW5wdXQudmFsdWU7XG5cdFx0XG5cdFx0aWYodGhpcy5yZXR1cm4gPT0gJ25ldmVyJylcblx0XHRcdHJldHVybjtcblxuXHRcdGlmKHRoaXMucmV0dXJuID09ICdpbnN0YW50Jyl7XG5cdFx0XHR3aW5kb3cuU2hpbnkuc2V0SW5wdXRWYWx1ZShcblx0XHRcdFx0dGhpcy5uYW1lICsgJzpsaXR0ZXIucGFyc2UnLCBcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHByb3BzOiB0aGlzLnByb3BzLCBcblx0XHRcdFx0XHR2YWx1ZTogdGhpcy52YWx1ZSxcblx0XHRcdFx0XHRpZDogdGhpcy5pZFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJpb3JpdHk6ICdldmVudCdcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblx0XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gaHRtbGA8dGV4dGFyZWFcblx0XHRcdEBrZXl1cD0nJHt0aGlzLl9zZW5kVmFsdWV9J1xuXHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdGNsYXNzPSdmb3JtLWNvbnRyb2wnIFxuXHRcdFx0bmFtZT0nJHt0aGlzLm5hbWV9J1xuXHRcdFx0aWQ9JyR7dGhpcy5pZH0nXG5cdFx0XHRwcm9wcz0nJHt0aGlzLnByb3BzfSdcblx0XHRcdHBsYWNlaG9sZGVyPScke3RoaXMucGxhY2Vob2xkZXJ9J1xuXHRcdFx0LnZhbHVlPScke3RoaXMudmFsdWV9Jz48L3RleHRhcmVhPmA7XG5cdH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGl0dGVyLXRleHRhcmVhJywgVGV4dEFyZWEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=