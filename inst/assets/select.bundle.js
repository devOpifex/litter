"use strict";(self.webpackChunklitter=self.webpackChunklitter||[]).push([[286],{106:(e,_,t)=>{var s=t(392),i=(t(235),t(311),t(193));class r extends i.X{static properties={options:{type:Array}};constructor(){super(),this.options=[]}firstUpdated(){this.value&&(this.shadowRoot.querySelector("select").value=this.value)}_setValue(){this.value=this.renderRoot.querySelector("select").value}_change(){this._setValue(),this._send()}render(){const e=this.options.map((e=>s.dy`<option value="${e.value}">${e.label}</option>`));return s.dy`<select
			class='form-select ${this.class}' @change=${this._change}>
      ${e}
		</select>`}}customElements.define("litter-select",r)},193:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{X:()=>LitInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(392),_css_bs5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),Shiny__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(235),Shiny__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__),jQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(311),jQuery__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__);class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static styles=[_css_bs5__WEBPACK_IMPORTED_MODULE_1__.Z];static properties={value:{type:String},name:{type:String},class:{type:String},priority:{type:String},id:{type:String},meta:{}};constructor(){super(),this.priority="deferred",this.class="",this.meta={},this.id=null,this.timeout=null}_send(){if(this.callback){let cb=eval(this.callback);return void cb(this)}let data={meta:this.meta,value:this.value};this.id&&(data.id=this.id),Shiny.setInputValue(this.name+":litter.parse",data,{priority:this.priority})}_sendThrottle(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this._send()}),250)}}},235:e=>{e.exports=Shiny},311:e=>{e.exports=jQuery}},e=>{e.O(0,[560,565],(()=>(106,e(e.s=106)))),e.O()}]);