"use strict";(self.webpackChunklitter=self.webpackChunklitter||[]).push([[90],{372:(t,e,s)=>{var i=s(897),n=s(331);s(235),s(311);class p extends i.oi{static styles=[n.Z];static properties={name:{type:String},id:{type:String},min:{type:String},max:{type:String},step:{type:String},value:{type:String},props:{}};constructor(){super(),this.props={},this.id=null,this.min=null,this.max=null,this.step=null,this.value=null}firstUpdated(){this._input=this.shadowRoot.querySelector("input")}_sendValue(){this.value=this._input.value,window.Shiny.setInputValue(this.name+":litter.parse",{props:this.props,value:parseInt(this.value),id:this.id},{priority:"event"})}render(){return i.dy`<input
			@input='${this._sendValue}'
			type='range'
			name='${this.name}'
			id='${this.id}'
			min='${this.min}'
			max='${this.max}'
			step='${this.step}'
			.value='${this.value}'
			props='${this.props}'
			class='form-range'>`}}window.customElements.define("litter-range",p)},235:t=>{t.exports=Shiny},311:t=>{t.exports=jQuery}},t=>{t.O(0,[560,565],(()=>(372,t(t.s=372)))),t.O()}]);