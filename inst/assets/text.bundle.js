"use strict";(self.webpackChunklitter=self.webpackChunklitter||[]).push([[547],{650:(t,e,s)=>{var i=s(897);s(235),s(311);class r extends i.oi{static get styles(){return i.iv`input{
				background-color: white;
				color: black;
			}`}static properties={class:{type:String},value:{type:String},name:{type:String},id:{type:String},return:{type:String},placeholder:{type:String},props:{}};constructor(){super(),this.return="enter",this._input={},this.value="",this.placeholder="",this.props={},this.id=null,this.class=null}firstUpdated(){this._input=this.shadowRoot.querySelector("input")}_sendValue(t){this.value=this._input.value,"never"!=this.return&&("instant"!=this.return?13==t.keyCode&&window.Shiny.setInputValue(this.name+":litter.parse",{props:this.props,value:this.value,id:this.id},{priority:"event"}):window.Shiny.setInputValue(this.name+":litter.parse",{props:this.props,value:this.value,id:this.id},{priority:"event"}))}render(){return i.dy`<input
			@keyup='${this._sendValue}'
			type='text'
			class='${this.class}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			placeholder='${this.placeholder}'
			value='${this.value}'>`}}window.customElements.define("text-input",r),window.Shiny.addCustomMessageHandler("litter-text-input",(t=>{t.props.length>0&&$(t.selector).attr("props",JSON.stringify(t.props)),t.value&&$(t.selector).attr("value",t.value)}))},235:t=>{t.exports=Shiny},311:t=>{t.exports=jQuery}},t=>{t.O(0,[560],(()=>(650,t(t.s=650)))),t.O()}]);