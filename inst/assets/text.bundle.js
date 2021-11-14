"use strict";(self.webpackChunklitter=self.webpackChunklitter||[]).push([[547],{650:(t,e,i)=>{var s=i(897);i(235),i(311);class r extends s.oi{static get styles(){return s.iv`input{
				background-color: white;
				color: black;
			}`}static properties={class:{type:String},value:{type:String},name:{type:String},id:{type:String},return:{type:String},placeholder:{type:String},props:{}};constructor(){super(),this.return="enter",this._input={},this.value="",this.placeholder="",this.props={},this.id=null,this.class=null}firstUpdated(){this._input=this.shadowRoot.querySelector("input")}_sendValue(t){this.value=this._input.value,"never"!=this.return&&("instant"!=this.return?13==t.keyCode&&window.Shiny.setInputValue(this.name+":litter.parse",{props:this.props,value:this.value,id:this.id},{priority:"event"}):window.Shiny.setInputValue(this.name+":litter.parse",{props:this.props,value:this.value,id:this.id},{priority:"event"}))}render(){return s.dy`<input
			@keyup='${this._sendValue}'
			type='text'
			class='${this.class}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			placeholder='${this.placeholder}'
			value='${this.value}'>`}}window.customElements.define("text-input",r)},235:t=>{t.exports=Shiny},311:t=>{t.exports=jQuery}},t=>{t.O(0,[560],(()=>(650,t(t.s=650)))),t.O()}]);