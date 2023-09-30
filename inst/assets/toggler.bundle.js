/*! For license information please see toggler.bundle.js.LICENSE.txt */
(self.webpackChunklitter=self.webpackChunklitter||[]).push([[634],{493:(t,e,s)=>{"use strict";var _=s(392),i=(s(235),s(311),s(193));s(921);class r extends i.X{static properties={inputShown:{type:Boolean,state:!1}};firstUpdated(){}_toggle(){this.shadowRoot.querySelector(".input").classList.toggle("d-none"),this.shadowRoot.querySelector("slot[name=display]").classList.toggle("d-none"),this.inputShown=!this.inputShown}_showInput(){this.shadowRoot.querySelector("slot[name=input]").assignedElements({flatten:!0})[0].value=this.value,this._toggle()}_getValue(){this.value=this.shadowRoot.querySelector("slot[name=input]").assignedElements({flatten:!0})[0].value}_validate(){this._toggle(),this._getValue(),this._send()}render(){return _.dy`
      <slot @click=${this._showInput} name="display">Click me</slot>
      <div class="d-none input position-relative d-flex">
        <button @click=${this._toggle} class="flex-shrink-1 btn btn-danger">
          <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
          <div class="flex-grow-1">
            <slot name="input"></slot>
          </div>
        <button @click=${this._validate} class="flex-shrink-1 btn btn-success">
          <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100"">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>
      </div>
    `}}customElements.define("litter-toggler",r)},193:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LitInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(392),_css_bs5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),Shiny__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(235),Shiny__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__),jQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(311),jQuery__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__),_update_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(946),_update_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static styles=[(0,_css_bs5__WEBPACK_IMPORTED_MODULE_1__.q)()];static properties={value:{type:String},name:{type:String},class:{type:String},priority:{type:String},id:{type:String},send:{state:!1},meta:{}};constructor(){super(),this.priority="deferred",this.class="",this.meta={},this.id=null,this.timeout=null,this.send="true"}firstUpdated(){this._sendOnConnect()}_send(){if("true"!=this.send)return;if(""==this.name)return;if(this.callback){let cb=eval(this.callback);return void cb(this)}let data={props:this.meta,value:this.value};this.id&&(data.id=this.id);try{Shiny.setInputValue(this.name+":litter.parse",data,{priority:this.priority})}catch(t){console.error("shiny not connected")}}_sendThrottle(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this._send()}),250)}_sendOnConnect(){$(document).on("shiny:connected",(t=>{this._send()}))}}},946:()=>{Shiny.addCustomMessageHandler("litter-update-input",(t=>{let e=(t=>t.name?`[name='${t.name}']`:t.sel?sel:t.id?`#${id}`:null)(t);e&&Object.keys(t.props).forEach(((s,_)=>{let i=t.props[s];"object"==typeof i&&(i=JSON.stringify(i)),$(e).attr(s,i)}))}))},235:t=>{"use strict";t.exports=Shiny},311:t=>{"use strict";t.exports=jQuery},921:(t,e,s)=>{"use strict";s.d(e,{V:()=>i});var _=s(692);const i=(r=class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const _=t[s];return null==_?e:e+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${_};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in e){const _=e[t];null!=_&&(this.ut.add(t),t.includes("-")?s.setProperty(t,_):s[t]=_)}return _.Jb}},(...t)=>({_$litDirective$:r,values:t}));var r}},t=>{t.O(0,[560,565],(()=>(493,t(t.s=493)))),t.O()}]);