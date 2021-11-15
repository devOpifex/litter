"use strict";
(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["text"],{

/***/ "./srcjs/components/text.js":
/*!**********************************!*\
  !*** ./srcjs/components/text.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Text": () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _css_bs5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/bs5 */ "./srcjs/css/bs5.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__);





class Text extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
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
		this._input = this.shadowRoot.querySelector('input');
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

		if(event.keyCode != 13)
			return;

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
	}
	
	render() {
		return lit__WEBPACK_IMPORTED_MODULE_0__.html`<input
			@keyup='${this._sendValue}'
			type='text'
			class='form-control' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			placeholder='${this.placeholder}'
			.value='${this.value}'>`;
	}
}

window.customElements.define('litter-text', Text);

window.Shiny.addCustomMessageHandler('litter-text-input', (msg) => {
	if(msg.props.length > 0)
		$(msg.selector).attr('props', JSON.stringify(msg.props));

	if(msg.value)
		$(msg.selector).attr('value', msg.value);
});


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/text.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNOO0FBQ2xCO0FBQ0M7O0FBRVQsbUJBQW1CLDJDQUFVO0FBQ3BDLGtCQUFrQix5Q0FBRzs7QUFFckI7QUFDQSxVQUFVLGFBQWE7QUFDdkIsVUFBVSxhQUFhO0FBQ3ZCLFNBQVMsYUFBYTtBQUN0QixPQUFPLGFBQWE7QUFDcEIsV0FBVyxhQUFhO0FBQ3hCLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxxQ0FBSTtBQUNiLGFBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckIsU0FBUyxRQUFRO0FBQ2pCLFlBQVksV0FBVztBQUN2QixrQkFBa0IsaUJBQWlCO0FBQ25DLGFBQWEsV0FBVztBQUN4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUMzRkQ7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2NvbXBvbmVudHMvdGV4dC5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBiczUgfSBmcm9tICcuLi9jc3MvYnM1JztcbmltcG9ydCAnU2hpbnknO1xuaW1wb3J0ICdqUXVlcnknO1xuXG5leHBvcnQgY2xhc3MgVGV4dCBleHRlbmRzIExpdEVsZW1lbnQge1xuXHRzdGF0aWMgc3R5bGVzID0gW2JzNV1cblxuXHRzdGF0aWMgcHJvcGVydGllcyA9IHtcblx0XHRjbGFzczoge3R5cGU6IFN0cmluZ30sXG5cdFx0dmFsdWU6IHt0eXBlOiBTdHJpbmd9LFxuXHRcdG5hbWU6IHt0eXBlOiBTdHJpbmd9LFxuXHRcdGlkOiB7dHlwZTogU3RyaW5nfSxcblx0XHRyZXR1cm46IHt0eXBlOiBTdHJpbmd9LFxuXHRcdHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nfSxcblx0XHRwcm9wczoge31cblx0fVxuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5yZXR1cm4gPSAnZW50ZXInO1xuXHRcdHRoaXMuX2lucHV0ID0ge307XG5cdFx0dGhpcy52YWx1ZSA9ICcnO1xuXHRcdHRoaXMucGxhY2Vob2xkZXIgPSAnJztcblx0XHR0aGlzLnByb3BzID0ge307XG5cdFx0dGhpcy5pZCA9IG51bGw7XG5cdFx0dGhpcy5jbGFzcyA9IG51bGw7XG5cdH1cblxuXHRmaXJzdFVwZGF0ZWQoKXtcblx0XHR0aGlzLl9pbnB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXHR9XG5cblx0X3NlbmRWYWx1ZShldmVudCkge1xuXHRcdHRoaXMudmFsdWUgPSB0aGlzLl9pbnB1dC52YWx1ZTtcblx0XHRcblx0XHRpZih0aGlzLnJldHVybiA9PSAnbmV2ZXInKVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0aWYodGhpcy5yZXR1cm4gPT0gJ2luc3RhbnQnKXtcblx0XHRcdHdpbmRvdy5TaGlueS5zZXRJbnB1dFZhbHVlKFxuXHRcdFx0XHR0aGlzLm5hbWUgKyAnOmxpdHRlci5wYXJzZScsIFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cHJvcHM6IHRoaXMucHJvcHMsIFxuXHRcdFx0XHRcdHZhbHVlOiB0aGlzLnZhbHVlLFxuXHRcdFx0XHRcdGlkOiB0aGlzLmlkXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcmlvcml0eTogJ2V2ZW50J1xuXHRcdFx0XHR9XG5cdFx0XHQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKGV2ZW50LmtleUNvZGUgIT0gMTMpXG5cdFx0XHRyZXR1cm47XG5cblx0XHR3aW5kb3cuU2hpbnkuc2V0SW5wdXRWYWx1ZShcblx0XHRcdHRoaXMubmFtZSArICc6bGl0dGVyLnBhcnNlJywgXG5cdFx0XHR7XG5cdFx0XHRcdHByb3BzOiB0aGlzLnByb3BzLCBcblx0XHRcdFx0dmFsdWU6IHRoaXMudmFsdWUsXG5cdFx0XHRcdGlkOiB0aGlzLmlkXG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRwcmlvcml0eTogJ2V2ZW50J1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblx0XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gaHRtbGA8aW5wdXRcblx0XHRcdEBrZXl1cD0nJHt0aGlzLl9zZW5kVmFsdWV9J1xuXHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdGNsYXNzPSdmb3JtLWNvbnRyb2wnIFxuXHRcdFx0bmFtZT0nJHt0aGlzLm5hbWV9J1xuXHRcdFx0aWQ9JyR7dGhpcy5pZH0nXG5cdFx0XHRwcm9wcz0nJHt0aGlzLnByb3BzfSdcblx0XHRcdHBsYWNlaG9sZGVyPScke3RoaXMucGxhY2Vob2xkZXJ9J1xuXHRcdFx0LnZhbHVlPScke3RoaXMudmFsdWV9Jz5gO1xuXHR9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xpdHRlci10ZXh0JywgVGV4dCk7XG5cbndpbmRvdy5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcignbGl0dGVyLXRleHQtaW5wdXQnLCAobXNnKSA9PiB7XG5cdGlmKG1zZy5wcm9wcy5sZW5ndGggPiAwKVxuXHRcdCQobXNnLnNlbGVjdG9yKS5hdHRyKCdwcm9wcycsIEpTT04uc3RyaW5naWZ5KG1zZy5wcm9wcykpO1xuXG5cdGlmKG1zZy52YWx1ZSlcblx0XHQkKG1zZy5zZWxlY3RvcikuYXR0cigndmFsdWUnLCBtc2cudmFsdWUpO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==