(self.webpackChunklitter=self.webpackChunklitter||[]).push([[841],{391:(e,_,t)=>{"use strict";var s=t(392),r=(t(235),t(311),t(193));class i extends r.X{static properties={value:{type:Number}};constructor(){super(),this.value=0,this.priority="event"}_increment(){this.value++,this._send()}render(){return s.dy`<button 
			@click="${this._increment}" 
			class='btn btn-default ${this.class}'>
			<slot></slot>
		</button>`}}customElements.define("litter-button",i)},193:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>LitInput});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(392),_css_bs5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(331),Shiny__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(235),Shiny__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__),jQuery__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(311),jQuery__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__),_update_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(946),_update_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static styles=[(0,_css_bs5__WEBPACK_IMPORTED_MODULE_1__.q)(),lit__WEBPACK_IMPORTED_MODULE_0__.iv`.pointer {cursor: pointer;}`];static properties={value:{type:String},name:{type:String},class:{type:String},priority:{type:String},callback:{type:String},id:{type:String},send_on_render:{type:Boolean,converter:(e,_)=>"false"!=e.toLowerCase()},meta:{},rendered:{type:Boolean,state:!1},send_on:{type:String}};constructor(){super(),this.priority="deferred",this.class="",this.meta={},this.id=null,this.timeout=null,this.callback="",this.rendered=!1,this.send_on_render=!0,this.send_on="deferred"}_send(){if(this.callback){const cb=eval(this.callback);return void cb(this)}if(""==this.name)return;if(!this.rendered&&!this.send_on_render)return void(this.rendered=!0);this.rendered=!0;const data={props:this.meta,value:this.value};this.id&&(data.id=this.id);try{this._setInputValue(data)}catch(e){this._sendOnConnect(data)}}_sendThrottle(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this._send()}),250)}_setInputValue(e){Shiny.setInputValue(this.name+":litter.parse",e,{priority:this.priority})}_sendOnConnect(e){$(document).on("shiny:connected",(()=>{this._setInputValue(e)}))}}},946:()=>{Shiny.addCustomMessageHandler("litter-update-input",(e=>{let _=(e=>e.name?`[name='${e.name}']`:e.sel?sel:e.id?`#${id}`:null)(e);_&&Object.keys(e.props).forEach(((t,s)=>{let r=e.props[t];"object"==typeof r&&(r=JSON.stringify(r)),$(_).attr(t,r)}))}))},235:e=>{"use strict";e.exports=Shiny},311:e=>{"use strict";e.exports=jQuery}},e=>{e.O(0,[560,565],(()=>(391,e(e.s=391)))),e.O()}]);