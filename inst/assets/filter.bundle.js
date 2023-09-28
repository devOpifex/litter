/*! For license information please see filter.bundle.js.LICENSE.txt */
(self.webpackChunklitter=self.webpackChunklitter||[]).push([[165],{630:(e,t,r)=>{"use strict";var s=r(392),i=r(921),_=(r(235),r(311),r(193));class n extends _.X{static properties={endpoint:{type:String},dataset:{type:Array},selected:{type:Array}};firstUpdated(){}constructor(){super(),this.endpoint="",this.dataset=[],this.selected=[],this.shown=!1}_showDropdown(){this.shadowRoot.querySelector(".dropdown-menu").style.display="flow-root",this.shown=!0}_hideDropdown(){this.shadowRoot.querySelector(".dropdown-menu").style.display="none",this.shown=!1}_click(){this.shown?this._hideDropdown():this._showDropdown()}_itemClick(e){this._hideDropdown(),this.selected.push(e.target.dataset.value),this.selected=this.selected.slice(0)}_variableRemove(e){const t=this.selected.filter((t=>{e.target.dataset.value}));this.selected=t}_renderButton(){return s.dy`<button @click=${this._click} class="btn btn-outline-secondary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">Add variable</button>`}_renderInput(e){return"factor"==e.type?this._renderFactor(e):"numeric"==e.type?this._renderNumeric(e):"logical"==e.type?this._renderLogical(e):this._renderCharacter(e)}_renderFactor(e){let t=e.values.map((e=>({label:e,label:e})));return s.dy`<litter-selectize meta="[]" placeholder="Search a value" name="" options='${JSON.stringify(t)}' ></litter-selectize>`}_renderNumeric(e){return s.dy`<litter-range min="${e.min}" max="${e.max}" step="1" name=""></litter-range>`}_renderCharacter(e){return s.dy`<litter-text name="" value=""></litter-text>`}_renderLogical(e){return s.dy`<litter-checkboxes name="" value='[true, false]' options='[true, false]'></litter-checkboxes>`}render(){console.log(this.dataset);const e=this._renderButton();if(0==this.dataset.length)return e;const t=this.dataset.filter((e=>!this.selected.includes(e.name))).map((e=>s.dy`<li><a data-value="${e.name}" class="dropdown-item">${e.label||e.name}</a></li>`)),r=s.dy`<div class="input-group">
      ${e}
      <ul @click=${this._itemClick} class="dropdown-menu dropdown-menu-end w-100">
      ${t}
      </ul>
    </div>`;if(0==this.selected.length)return r;let _=this.dataset.filter((e=>this.selected.includes(e.name))).map((e=>{const t=this._renderInput(e);return s.dy`<div class="card mb-1">
        <div class="card-body">
          <div class="d-flex">
            <div class="flex-grow-1">
              <p class="fw-bold">${e.label||e.name}</p>
            </div>
            <div class="flex-shrink-1">
              <span data-value="${e.name}" @click=${this._variableRemove}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-danger" style=${(0,i.V)({height:"1rem",cursor:"pointer"})}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </a>
            </div>
          </div>
          ${t}
        </div>
      </div>`}));return s.dy`${_}${r}`}}customElements.define("litter-filter",n)},193:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LitInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(392),_css_bs5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),Shiny__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(235),Shiny__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__),jQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(311),jQuery__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__),_update_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(946),_update_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static styles=[(0,_css_bs5__WEBPACK_IMPORTED_MODULE_1__.q)()];static properties={value:{type:String},name:{type:String},class:{type:String},priority:{type:String},id:{type:String},meta:{}};constructor(){super(),this.priority="deferred",this.class="",this.meta={},this.id=null,this.timeout=null}firstUpdated(){this._sendOnConnect()}_send(){if(""==this.name)return;if(this.callback){let cb=eval(this.callback);return void cb(this)}let data={props:this.meta,value:this.value};this.id&&(data.id=this.id);try{Shiny.setInputValue(this.name+":litter.parse",data,{priority:this.priority})}catch(e){console.error("shiny not connected")}}_sendThrottle(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this._send()}),250)}_sendOnConnect(){$(document).on("shiny:connected",(e=>{this._send()}))}}},946:()=>{Shiny.addCustomMessageHandler("litter-update-input",(e=>{let t=(e=>e.name?`[name='${e.name}']`:e.sel?sel:e.id?`#${id}`:null)(e);t&&Object.keys(e.props).forEach(((r,s)=>{let i=e.props[r];"object"==typeof i&&(i=JSON.stringify(i)),$(t).attr(r,i)}))}))},235:e=>{"use strict";e.exports=Shiny},311:e=>{"use strict";e.exports=jQuery},921:(e,t,r)=>{"use strict";r.d(t,{V:()=>i});var s=r(692);const i=(_=class extends class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}{constructor(e){var t;if(super(e),1!==e.type||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{const s=e[r];return null==s?t:t+`${r=r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[t]){const{style:r}=e.element;if(void 0===this.ut){this.ut=new Set;for(const e in t)this.ut.add(e);return this.render(t)}this.ut.forEach((e=>{null==t[e]&&(this.ut.delete(e),e.includes("-")?r.removeProperty(e):r[e]="")}));for(const e in t){const s=t[e];null!=s&&(this.ut.add(e),e.includes("-")?r.setProperty(e,s):r[e]=s)}return s.Jb}},(...e)=>({_$litDirective$:_,values:e}));var _}},e=>{e.O(0,[560,565],(()=>(630,e(e.s=630)))),e.O()}]);