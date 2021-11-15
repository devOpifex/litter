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
/* harmony import */ var _css_bs5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/bs5 */ "./srcjs/css/bs5.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__);





class ActionButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
	static styles = [_css_bs5__WEBPACK_IMPORTED_MODULE_1__.bs5]

	static properties = {
		color: {type: String},
		count: {type: Number},
		name: {type: String},
		id: {type: String},
		size: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.count = 0;
		this.props = {};
		this.id = null;
		this.color = null;
		this.size = ""
	}

	_increment(e) {
		this.count++

		if(this.callback){
			let cb = eval(this.callback);
			cb(this);
			return ;
		}

		window.Shiny.setInputValue(
			this.name + ':litter.parse', 
			{
				props: this.props, 
				value: this.count,
				id: this.id
			},
			{
				priority: 'event'
			}
		);
	}

	get _slottedChildren() {
		return this.shadowRoot.querySelector('slot');
	}

	render() {
		let size = '';
		switch(this.size){
			case 'small':
				size = 'btn-sm';
				break;
			case 'large':
				size = 'btn-lg';
				break;
		}
		return lit__WEBPACK_IMPORTED_MODULE_0__.html`<button 
			@click="${this._increment}" 
			class='btn btn-${this.color} ${size}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'>
			<slot></slot>
		</button>`;
	}
}

window.Shiny.addCustomMessageHandler('litter-action-button', (msg) => {
	if(msg.props.length > 0)
		$(msg.selector).attr('props', JSON.stringify(msg.props));

	if(msg.content)
		$(msg.selector)
			.children()
			.html(msg.content)
});

window.customElements.define('litter-button', ActionButton);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/button.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ047QUFDbEI7QUFDQzs7QUFFVCwyQkFBMkIsMkNBQVU7QUFDNUMsa0JBQWtCLHlDQUFHOztBQUVyQjtBQUNBLFVBQVUsYUFBYTtBQUN2QixVQUFVLGFBQWE7QUFDdkIsU0FBUyxhQUFhO0FBQ3RCLE9BQU8sYUFBYTtBQUNwQixTQUFTLGFBQWE7QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFDQUFJO0FBQ2IsYUFBYSxnQkFBZ0I7QUFDN0Isb0JBQW9CLFlBQVksRUFBRSxLQUFLO0FBQ3ZDLFdBQVcsVUFBVTtBQUNyQixTQUFTLFFBQVE7QUFDakIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7O0FDbkZBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9jb21wb25lbnRzL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBiczUgfSBmcm9tICcuLi9jc3MvYnM1JztcbmltcG9ydCAnU2hpbnknO1xuaW1wb3J0ICdqUXVlcnknO1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uQnV0dG9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cdHN0YXRpYyBzdHlsZXMgPSBbYnM1XVxuXG5cdHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuXHRcdGNvbG9yOiB7dHlwZTogU3RyaW5nfSxcblx0XHRjb3VudDoge3R5cGU6IE51bWJlcn0sXG5cdFx0bmFtZToge3R5cGU6IFN0cmluZ30sXG5cdFx0aWQ6IHt0eXBlOiBTdHJpbmd9LFxuXHRcdHNpemU6IHt0eXBlOiBTdHJpbmd9LFxuXHRcdHByb3BzOiB7fVxuXHR9XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNvdW50ID0gMDtcblx0XHR0aGlzLnByb3BzID0ge307XG5cdFx0dGhpcy5pZCA9IG51bGw7XG5cdFx0dGhpcy5jb2xvciA9IG51bGw7XG5cdFx0dGhpcy5zaXplID0gXCJcIlxuXHR9XG5cblx0X2luY3JlbWVudChlKSB7XG5cdFx0dGhpcy5jb3VudCsrXG5cblx0XHRpZih0aGlzLmNhbGxiYWNrKXtcblx0XHRcdGxldCBjYiA9IGV2YWwodGhpcy5jYWxsYmFjayk7XG5cdFx0XHRjYih0aGlzKTtcblx0XHRcdHJldHVybiA7XG5cdFx0fVxuXG5cdFx0d2luZG93LlNoaW55LnNldElucHV0VmFsdWUoXG5cdFx0XHR0aGlzLm5hbWUgKyAnOmxpdHRlci5wYXJzZScsIFxuXHRcdFx0e1xuXHRcdFx0XHRwcm9wczogdGhpcy5wcm9wcywgXG5cdFx0XHRcdHZhbHVlOiB0aGlzLmNvdW50LFxuXHRcdFx0XHRpZDogdGhpcy5pZFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0cHJpb3JpdHk6ICdldmVudCdcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0Z2V0IF9zbG90dGVkQ2hpbGRyZW4oKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90Jyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHNpemUgPSAnJztcblx0XHRzd2l0Y2godGhpcy5zaXplKXtcblx0XHRcdGNhc2UgJ3NtYWxsJzpcblx0XHRcdFx0c2l6ZSA9ICdidG4tc20nO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2xhcmdlJzpcblx0XHRcdFx0c2l6ZSA9ICdidG4tbGcnO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIGh0bWxgPGJ1dHRvbiBcblx0XHRcdEBjbGljaz1cIiR7dGhpcy5faW5jcmVtZW50fVwiIFxuXHRcdFx0Y2xhc3M9J2J0biBidG4tJHt0aGlzLmNvbG9yfSAke3NpemV9JyBcblx0XHRcdG5hbWU9JyR7dGhpcy5uYW1lfSdcblx0XHRcdGlkPScke3RoaXMuaWR9J1xuXHRcdFx0cHJvcHM9JyR7dGhpcy5wcm9wc30nPlxuXHRcdFx0PHNsb3Q+PC9zbG90PlxuXHRcdDwvYnV0dG9uPmA7XG5cdH1cbn1cblxud2luZG93LlNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKCdsaXR0ZXItYWN0aW9uLWJ1dHRvbicsIChtc2cpID0+IHtcblx0aWYobXNnLnByb3BzLmxlbmd0aCA+IDApXG5cdFx0JChtc2cuc2VsZWN0b3IpLmF0dHIoJ3Byb3BzJywgSlNPTi5zdHJpbmdpZnkobXNnLnByb3BzKSk7XG5cblx0aWYobXNnLmNvbnRlbnQpXG5cdFx0JChtc2cuc2VsZWN0b3IpXG5cdFx0XHQuY2hpbGRyZW4oKVxuXHRcdFx0Lmh0bWwobXNnLmNvbnRlbnQpXG59KTtcblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGl0dGVyLWJ1dHRvbicsIEFjdGlvbkJ1dHRvbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==