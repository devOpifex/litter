"use strict";(self.webpackChunklitter=self.webpackChunklitter||[]).push([[841],{391:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(392),Shiny__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(235),Shiny__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__),jQuery__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(311),jQuery__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);class ActionButton extends lit__WEBPACK_IMPORTED_MODULE_0__.oi{static get styles(){return lit__WEBPACK_IMPORTED_MODULE_0__.iv`button{
				background-color: black;
				color: white;
			}`}static properties={class:{type:String},label:{type:String},count:{type:Number},name:{type:String},id:{type:String},callback:{type:String},props:{}};constructor(){super(),this.label="Click me",this.count=0,this.props={},this.id=null,this.class=null}_increment(e){if(this.count++,this.callback){let cb=eval(this.callback);cb(this)}else window.Shiny.setInputValue(this.name+":litter.parse",{props:this.props,value:this.count,id:this.id},{priority:"event"})}render(){return lit__WEBPACK_IMPORTED_MODULE_0__.dy`<button 
			@click="${this._increment}" 
			class='${this.class}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'>
			${this.label}
		</button>`}}window.Shiny.addCustomMessageHandler("litter-action-button",(_=>{_.props.length>0&&$(_.selector).attr("props",JSON.stringify(_.props)),_.label&&$(_.selector).attr("label",_.label)})),window.customElements.define("litter-button",ActionButton)},235:_=>{_.exports=Shiny},311:_=>{_.exports=jQuery}},_=>{_.O(0,[560],(()=>(391,_(_.s=391)))),_.O()}]);