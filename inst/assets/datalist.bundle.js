(self.webpackChunklitter=self.webpackChunklitter||[]).push([[44],{774:(t,e,_)=>{"use strict";var i=_(392),s=(_(235),_(311),_(193));class r extends s.X{static properties={options:{type:Array},placeholder:{type:String},endpoint:{type:String}};constructor(){super(),this.options=[],this.endpoint="",this.timeout,this.lastSearch=""}firstUpdated(){this._sendOnConnect(),this.value&&(this.shadowRoot.querySelector("input").value=this.value)}updated(){this.value&&(this.shadowRoot.querySelector("input").value=this.value,this._send())}_setValue(){this.value=this.shadowRoot.querySelector("input").value}_change(){const t=this.shadowRoot.querySelector("input").value;this.shadowRoot.querySelector("input").blur(),0!=this.options.filter((e=>e.value==t)).length&&this._setValue()}_input(){const t=this.shadowRoot.querySelector("input").value;0!=this.options.filter((e=>e.value==t)).length&&this._setValue()}_keyup(t){if(!this.endpoint||""==this.endpoint)return;const e=t.currentTarget.value;e!=this.lastSearch&&(this.lastSearch=e,clearTimeout(this.timeout),this.timeout=setTimeout((()=>{fetch(`${this.endpoint}&query=${encodeURIComponent(e)}`).then((t=>t.json())).then((t=>{this.options=t}))}),150))}render(){const t=this.options.map((t=>i.dy`<option value="${t.value}">${t.label}</option<`));return i.dy`<input @input=${this._input} @change=${this._change} @keyup=${this._keyup} placeholder="${this.placeholder}" list="datalist" class='form-control ${this.class}'/>
    <datalist id="datalist">
      ${t}
		</datalist>`}}customElements.define("litter-datalist",r)},193:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LitInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(392),_css_bs5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),Shiny__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(235),Shiny__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__),jQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(311),jQuery__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__),_update_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(946),_update_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static styles=[(0,_css_bs5__WEBPACK_IMPORTED_MODULE_1__.q)()];static properties={value:{type:String},name:{type:String},class:{type:String},priority:{type:String},id:{type:String},meta:{}};constructor(){super(),this.priority="deferred",this.class="",this.meta={},this.id=null,this.timeout=null}firstUpdated(){this._sendOnConnect()}_send(){if(this.callback){let cb=eval(this.callback);return void cb(this)}let data={props:this.meta,value:this.value};this.id&&(data.id=this.id);try{Shiny.setInputValue(this.name+":litter.parse",data,{priority:this.priority})}catch(t){console.error("shiny not connected")}}_sendThrottle(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this._send()}),250)}_sendOnConnect(){$(document).on("shiny:connected",(t=>{this._send()}))}}},946:()=>{Shiny.addCustomMessageHandler("litter-update-input",(t=>{let e=(t=>t.name?`[name='${t.name}']`:t.sel?sel:t.id?`#${id}`:null)(t);e&&Object.keys(t.props).forEach(((_,i)=>{let s=t.props[_];"object"==typeof s&&(s=JSON.stringify(s)),$(e).attr(_,s)}))}))},235:t=>{"use strict";t.exports=Shiny},311:t=>{"use strict";t.exports=jQuery}},t=>{t.O(0,[560,565],(()=>(774,t(t.s=774)))),t.O()}]);