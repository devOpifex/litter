(self.webpackChunklitter=self.webpackChunklitter||[]).push([[203],{377:(e,_,t)=>{"use strict";var s=t(392),i=(t(235),t(311),t(193));class r extends i.X{static properties={options:{type:Array},value:{type:Array}};constructor(){super(),this.options=[],this.value=[]}updated(){this.value.map((e=>{this.shadowRoot.querySelector(`input[value='${e}']`).checked=!0})),this._send()}_setValue(){let e=this.renderRoot.querySelectorAll("input"),_=Array.from(e).map((e=>{if(e.checked)return e.value})).filter((e=>null!=e));this.value=_}_change(){this._setValue()}render(){const e=this.options.map((e=>s.dy`<div class="form-check ${this.class}">
        <input class="form-check-input" type="checkbox" value="${e}"/>
        <label class="form-check-label">${e}</label>
      </div>`));return s.dy`<div class="checkboxes-wrapper"
			@change=${this._change}>
      ${e}
		</div>`}}customElements.define("litter-checkboxes",r)},193:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LitInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(392),_css_bs5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),Shiny__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(235),Shiny__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__),jQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(311),jQuery__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__),_update_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(946),_update_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static styles=[(0,_css_bs5__WEBPACK_IMPORTED_MODULE_1__.q)()];static properties={value:{type:String},name:{type:String},class:{type:String},priority:{type:String},id:{type:String},meta:{}};constructor(){super(),this.priority="deferred",this.class="",this.meta={},this.id=null,this.timeout=null}firstUpdated(){this._sendOnConnect()}_send(){if(this.callback){let cb=eval(this.callback);return void cb(this)}let data={props:this.meta,value:this.value};this.id&&(data.id=this.id);try{Shiny.setInputValue(this.name+":litter.parse",data,{priority:this.priority})}catch(e){console.error("shiny not connected")}}_sendThrottle(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this._send()}),250)}_sendOnConnect(){$(document).on("shiny:connected",(e=>{this._send()}))}}},946:()=>{Shiny.addCustomMessageHandler("litter-update-input",(e=>{let _=(e=>e.name?`[name='${e.name}']`:e.sel?sel:e.id?`#${id}`:"")(e);Object.keys(e.props).forEach(((t,s)=>{$(_).attr(t,e.props[t])}))}))},235:e=>{"use strict";e.exports=Shiny},311:e=>{"use strict";e.exports=jQuery}},e=>{e.O(0,[560,565],(()=>(377,e(e.s=377)))),e.O()}]);