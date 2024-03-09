/*! For license information please see toggler.bundle.js.LICENSE.txt */
(self.webpackChunklitter=self.webpackChunklitter||[]).push([[159],{928:(t,e,s)=>{"use strict";var i=s(684),r=(s(270),s(669),s(167)),n=(s(145),s(752)),_=s(804);class o extends _.WL{constructor(t){if(super(t),this.et=n.s6,t.type!==_.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===n.s6||null==t)return this.ft=void 0,this.et=t;if(t===n.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}o.directiveName="unsafeHTML",o.resultType=1;const a=(0,_.u$)(o);class l extends r.Q{static properties={inputShown:{type:Boolean,state:!1},feedback:{type:String},accept:{type:String},default:{type:String,attribute:!1},restore:{type:Boolean}};constructor(){super(),this.inputShown=!1,this.feedback="",this.accept=!0,this.default="",this.restore=!0}_toggle(){this.shadowRoot.querySelector(".input").classList.toggle("d-none"),this.shadowRoot.querySelector("slot[name=display]").classList.toggle("d-none"),this.inputShown||(this.shadowRoot.querySelector("slot[name=input]").assignedElements({flatten:!0})[0].value=this.shadowRoot.querySelector("slot[name=display]").textContent),this.inputShown=!this.inputShown}_showInput(){this.default=this.shadowRoot.querySelector("slot[name=input]").assignedElements({flatten:!0})[0].value,this.shadowRoot.querySelector("slot[name=input]").assignedElements({flatten:!0})[0].value=this.value,this._toggle()}_getValue(){this.value=this.shadowRoot.querySelector("slot[name=input]").assignedElements({flatten:!0})[0].value}_validate(){"true"==this.accept&&(this._toggle(),this._getValue(),this.restore&&(this.shadowRoot.querySelector("slot[name=display]").assignedElements({flatten:!0})[0].textContent=this.value),this._send())}_keydown(t){"Enter"==t.key&&this._validate()}_cancel(){this.feedback="",this.shadowRoot.querySelector("slot[name=input]").assignedElements({flatten:!0})[0].value=this.default,this._toggle()}render(){return i.qy`
      <slot @click=${this._showInput} name="display">Click me</slot>
      <div class="d-none input position-relative d-flex">
        <div class="flex-grow-1">
          <slot @keydown=${this._keydown} name="input"></slot>
        </div>
        <div class="flex-shrink-1">
          <button @click=${this._cancel} class="btn btn-danger">
            <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button @click=${this._validate} class="btn btn-success">
            <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100"">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </button>
        </div>
      </div>
      ${a(this.feedback)}
    `}}customElements.define("litter-toggler",l)},167:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>LitInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(684),_css_bs5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(349),Shiny__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(270),Shiny__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__),jQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(669),jQuery__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__),_update_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(478),_update_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.WF{static styles=[(0,_css_bs5__WEBPACK_IMPORTED_MODULE_1__.n)(),lit__WEBPACK_IMPORTED_MODULE_0__.AH`.pointer {cursor: pointer;}`];static properties={value:{type:String},name:{type:String},class:{type:String},priority:{type:String},callback:{type:String},id:{type:String},send_on_render:{type:Boolean,converter:(t,e)=>"false"!=t.toLowerCase()},meta:{},rendered:{type:Boolean,state:!1},send_on:{type:String}};constructor(){super(),this.priority="deferred",this.class="",this.meta={},this.id=null,this.timeout=null,this.callback="",this.rendered=!1,this.send_on_render=!0,this.send_on="deferred"}_send(){if(this.callback){const cb=eval(this.callback);return void cb(this)}if(""==this.name)return;if(!this.rendered&&!this.send_on_render)return void(this.rendered=!0);this.rendered=!0;const data={props:this.meta,value:this.value};this.id&&(data.id=this.id);try{this._setInputValue(data)}catch(t){this._sendOnConnect(data)}}_sendThrottle(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this._send()}),250)}_setInputValue(t){Shiny.setInputValue(this.name+":litter.parse",t,{priority:this.priority})}_sendOnConnect(t){$(document).on("shiny:connected",(()=>{this._setInputValue(t)}))}}},478:()=>{Shiny.addCustomMessageHandler("litter-update-input",(t=>{let e=(t=>t.name?`[name='${t.name}']`:t.sel?sel:t.id?`#${id}`:null)(t);e&&Object.keys(t.props).forEach(((s,i)=>{let r=t.props[s];"object"==typeof r&&(r=JSON.stringify(r)),$(e).attr(s,r)}))}))},270:t=>{"use strict";t.exports=Shiny},669:t=>{"use strict";t.exports=jQuery},804:(t,e,s)=>{"use strict";s.d(e,{OA:()=>i,WL:()=>n,u$:()=>r});const i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},145:(t,e,s)=>{"use strict";s.d(e,{W:()=>o});var i=s(752),r=s(804);const n="important",_=" !"+n,o=(0,r.u$)(class extends r.WL{constructor(t){var e;if(super(t),t.type!==r.OA.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,s)=>{const i=t[s];return null==i?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(t,[e]){const{style:s}=t.element;if(void 0===this.ht){this.ht=new Set;for(const t in e)this.ht.add(t);return this.render(e)}this.ht.forEach((t=>{null==e[t]&&(this.ht.delete(t),t.includes("-")?s.removeProperty(t):s[t]="")}));for(const t in e){const i=e[t];if(null!=i){this.ht.add(t);const e="string"==typeof i&&i.endsWith(_);t.includes("-")||e?s.setProperty(t,e?i.slice(0,-11):i,e?n:""):s[t]=i}}return i.c0}})}},t=>{t.O(0,[866,455],(()=>(928,t(t.s=928)))),t.O()}]);