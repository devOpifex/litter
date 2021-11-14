"use strict";
(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["button"],{

/***/ "./srcjs/components/button.js":
/*!************************************!*\
  !*** ./srcjs/components/button.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionButton": () => (/* binding */ ActionButton)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);




class ActionButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
	static get styles() {
		return lit__WEBPACK_IMPORTED_MODULE_0__.css`button{
				background-color: black;
				color: white;
			}`;
	}

	static properties = {
		class: {type: String},
		label: {type: String},
		count: {type: Number},
		name: {type: String},
		id: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.label = 'Click me';
		this.count = 0;
		this.props = {};
		this.id = null;
		this.class = null;
	}

	_increment(e) {
		this.count++
		window.Shiny.setInputValue(
			this.name + ':litter.parse', 
			{
				props: this.props, 
				count: this.count,
				id: this.id
			},
			{
				priority: 'event'
			}
		);
	}

	render() {
		return lit__WEBPACK_IMPORTED_MODULE_0__.html`<button 
			@click="${this._increment}" 
			class='${this.class}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'>
			${this.label}
		</button>`;
	}
}

window.Shiny.addCustomMessageHandler('litter-action-button', (msg) => {
	if(msg.props.length > 0)
		$(msg.selector).attr('props', JSON.stringify(msg.props));

	if(msg.label)
		$(msg.selector).attr('label', msg.label);
});

window.customElements.define('action-button', ActionButton);


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
/******/ __webpack_require__.O(0, ["lit"], () => (__webpack_exec__("./srcjs/components/button.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDN0I7QUFDQzs7QUFFVCwyQkFBMkIsMkNBQVU7QUFDNUM7QUFDQSxTQUFTLG9DQUFHO0FBQ1o7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBLFVBQVUsYUFBYTtBQUN2QixVQUFVLGFBQWE7QUFDdkIsVUFBVSxhQUFhO0FBQ3ZCLFNBQVMsYUFBYTtBQUN0QixPQUFPLGFBQWE7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMscUNBQUk7QUFDYixhQUFhLGdCQUFnQjtBQUM3QixZQUFZLFdBQVc7QUFDdkIsV0FBVyxVQUFVO0FBQ3JCLFNBQVMsUUFBUTtBQUNqQixZQUFZLFdBQVc7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7O0FDakVBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgY3NzLCBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcbmltcG9ydCAnU2hpbnknO1xuaW1wb3J0ICdqUXVlcnknO1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cdHN0YXRpYyBnZXQgc3R5bGVzKCkge1xuXHRcdHJldHVybiBjc3NgYnV0dG9ue1xuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0fWA7XG5cdH1cblxuXHRzdGF0aWMgcHJvcGVydGllcyA9IHtcblx0XHRjbGFzczoge3R5cGU6IFN0cmluZ30sXG5cdFx0bGFiZWw6IHt0eXBlOiBTdHJpbmd9LFxuXHRcdGNvdW50OiB7dHlwZTogTnVtYmVyfSxcblx0XHRuYW1lOiB7dHlwZTogU3RyaW5nfSxcblx0XHRpZDoge3R5cGU6IFN0cmluZ30sXG5cdFx0cHJvcHM6IHt9XG5cdH1cblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubGFiZWwgPSAnQ2xpY2sgbWUnO1xuXHRcdHRoaXMuY291bnQgPSAwO1xuXHRcdHRoaXMucHJvcHMgPSB7fTtcblx0XHR0aGlzLmlkID0gbnVsbDtcblx0XHR0aGlzLmNsYXNzID0gbnVsbDtcblx0fVxuXG5cdF9pbmNyZW1lbnQoZSkge1xuXHRcdHRoaXMuY291bnQrK1xuXHRcdHdpbmRvdy5TaGlueS5zZXRJbnB1dFZhbHVlKFxuXHRcdFx0dGhpcy5uYW1lICsgJzpsaXR0ZXIucGFyc2UnLCBcblx0XHRcdHtcblx0XHRcdFx0cHJvcHM6IHRoaXMucHJvcHMsIFxuXHRcdFx0XHRjb3VudDogdGhpcy5jb3VudCxcblx0XHRcdFx0aWQ6IHRoaXMuaWRcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHByaW9yaXR5OiAnZXZlbnQnXG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gaHRtbGA8YnV0dG9uIFxuXHRcdFx0QGNsaWNrPVwiJHt0aGlzLl9pbmNyZW1lbnR9XCIgXG5cdFx0XHRjbGFzcz0nJHt0aGlzLmNsYXNzfScgXG5cdFx0XHRuYW1lPScke3RoaXMubmFtZX0nXG5cdFx0XHRpZD0nJHt0aGlzLmlkfSdcblx0XHRcdHByb3BzPScke3RoaXMucHJvcHN9Jz5cblx0XHRcdCR7dGhpcy5sYWJlbH1cblx0XHQ8L2J1dHRvbj5gO1xuXHR9XG59XG5cbndpbmRvdy5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcignbGl0dGVyLWFjdGlvbi1idXR0b24nLCAobXNnKSA9PiB7XG5cdGlmKG1zZy5wcm9wcy5sZW5ndGggPiAwKVxuXHRcdCQobXNnLnNlbGVjdG9yKS5hdHRyKCdwcm9wcycsIEpTT04uc3RyaW5naWZ5KG1zZy5wcm9wcykpO1xuXG5cdGlmKG1zZy5sYWJlbClcblx0XHQkKG1zZy5zZWxlY3RvcikuYXR0cignbGFiZWwnLCBtc2cubGFiZWwpO1xufSk7XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FjdGlvbi1idXR0b24nLCBBY3Rpb25CdXR0b24pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=