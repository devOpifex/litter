(self.webpackChunklitter=self.webpackChunklitter||[]).push([[881],{176:(_,e,t)=>{"use strict";var s=t(392),i=(t(235),t(311),t(193));class r extends i.X{_change(){this.value=this.shadowRoot.querySelector("input").value}updated(){this._sendThrottle()}render(){return s.dy`<input
      class = 'form-control ${this.class}'
      value = '${this.value}'
      type = 'password'
			@keyup='${this._change}'
			placeholder='${this.placeholder}'>`}}customElements.define("litter-password",r)},193:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LitInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(392),_css_bs5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),Shiny__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(235),Shiny__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__),jQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(311),jQuery__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__),_update_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(946),_update_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static styles=[_css_bs5__WEBPACK_IMPORTED_MODULE_1__.Z];static properties={value:{type:String},name:{type:String},class:{type:String},priority:{type:String},id:{type:String},meta:{}};constructor(){super(),this.priority="deferred",this.class="",this.meta={},this.id=null,this.timeout=null}firstUpdated(){this._sendOnConnect()}_send(){if(this.callback){let cb=eval(this.callback);return void cb(this)}let data={meta:this.meta,value:this.value};this.id&&(data.id=this.id);try{Shiny.setInputValue(this.name+":litter.parse",data,{priority:this.priority})}catch(_){console.error("shiny not connected")}}_sendThrottle(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this._send()}),250)}_sendOnConnect(){$(document).on("shiny:connected",(_=>{this._send()}))}}},946:()=>{Shiny.addCustomMessageHandler("litter-update-input",(_=>{let e=(_=>_.name?`[name='${_.name}']`:_.sel?sel:_.id?`#${id}`:"")(_);Object.keys(_.props).forEach(((t,s)=>{$(e).attr(t,_.props[t])}))}))},235:_=>{"use strict";_.exports=Shiny},311:_=>{"use strict";_.exports=jQuery}},_=>{_.O(0,[560,565],(()=>(176,_(_.s=176)))),_.O()}]);