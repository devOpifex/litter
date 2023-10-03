/*! For license information please see range.bundle.js.LICENSE.txt */
(self.webpackChunklitter=self.webpackChunklitter||[]).push([[90],{372:(t,e,s)=>{"use strict";var _=s(392),i=(s(235),s(311),s(193)),r=s(959);class n extends i.X{static properties={value:{type:Number},min:{type:Number},max:{type:Number},step:{type:Number}};constructor(){super(),this.value=0,this.styles={left:"50%"}}firstUpdated(){this._input=this.shadowRoot.querySelector("input"),this._sendOnConnect()}willUpdate(t){if(!t.has("value"))return;t.get("value"),this.shadowRoot.querySelector("output");let e=100*(this.value-this.min)/(this.max-this.min);this.styles={left:`calc(${e}% + (${1-.15*e}px))`}}updated(){this._sendThrottle()}_change(){this.value=parseInt(this._input.value),this.shadowRoot.querySelector("output");let t=100*(this.value-this.min)/(this.max-this.min);this.styles={left:`calc(${t}% + (${1-.15*t}px))`}}render(){return _.dy`<div class="position-relative w-100">
      <span class="float-start" style=${(0,r.V)({fontSize:"0.75rem"})}>${this.min}</span>
      <span class="float-end" style=${(0,r.V)({fontSize:"0.75rem"})}>${this.max}</span>
      <output class="position-absolute rounded px-1 bg-primary text-white" style=${(0,r.V)(this.styles)}>${this.value}</output>
      <input
        @input='${this._change}'
        type='range'
        min='${this.min}'
        max='${this.max}'
        step='${this.step}'
        value='${this.value}'
        class='form-range ${this.class}'>
    </div>`}}window.customElements.define("litter-range",n)},193:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LitInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(392),_css_bs5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),Shiny__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(235),Shiny__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__),jQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(311),jQuery__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__),_update_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(946),_update_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static styles=[(0,_css_bs5__WEBPACK_IMPORTED_MODULE_1__.q)()];static properties={value:{type:String},name:{type:String},class:{type:String},priority:{type:String},callback:{type:String},id:{type:String},meta:{}};constructor(){super(),this.priority="deferred",this.class="",this.meta={},this.id=null,this.timeout=null,this.callback=""}firstUpdated(){this._sendOnConnect()}_send(){if(this.callback){let cb=eval(this.callback);return void cb(this)}if(""==this.name)return;let data={props:this.meta,value:this.value};this.id&&(data.id=this.id);try{Shiny.setInputValue(this.name+":litter.parse",data,{priority:this.priority})}catch(t){console.error("shiny not connected")}}_sendThrottle(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this._send()}),250)}_sendOnConnect(){$(document).on("shiny:connected",(t=>{this._send()}))}}},946:()=>{Shiny.addCustomMessageHandler("litter-update-input",(t=>{let e=(t=>t.name?`[name='${t.name}']`:t.sel?sel:t.id?`#${id}`:null)(t);e&&Object.keys(t.props).forEach(((s,_)=>{let i=t.props[s];"object"==typeof i&&(i=JSON.stringify(i)),$(e).attr(s,i)}))}))},235:t=>{"use strict";t.exports=Shiny},311:t=>{"use strict";t.exports=jQuery},875:(t,e,s)=>{"use strict";s.d(e,{Xe:()=>r,pX:()=>_,XM:()=>i});const _={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},959:(t,e,s)=>{"use strict";s.d(e,{V:()=>r});var _=s(692),i=s(875);const r=(0,i.XM)(class extends i.Xe{constructor(t){var e;if(super(t),t.type!==i.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const _=t[s];return null==_?e:e+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${_};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in e){const _=e[t];null!=_&&(this.ut.add(t),t.includes("-")?s.setProperty(t,_):s[t]=_)}return _.Jb}})}},t=>{t.O(0,[560,565],(()=>(372,t(t.s=372)))),t.O()}]);