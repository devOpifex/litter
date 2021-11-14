"use strict";(self.webpackChunklitter=self.webpackChunklitter||[]).push([[841],{391:(t,e,s)=>{var i=s(897);s(235),s(311);class r extends i.oi{static get styles(){return i.iv`button{
				background-color: black;
				color: white;
			}`}static properties={class:{type:String},label:{type:String},count:{type:Number},name:{type:String},id:{type:String},props:{}};constructor(){super(),this.label="Click me",this.count=0,this.props={},this.id=null,this.class=null}_increment(t){this.count++,window.Shiny.setInputValue(this.name+":litter.parse",{props:this.props,value:this.count,id:this.id},{priority:"event"})}render(){return i.dy`<button 
			@click="${this._increment}" 
			class='${this.class}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'>
			${this.label}
		</button>`}}window.Shiny.addCustomMessageHandler("litter-action-button",(t=>{t.props.length>0&&$(t.selector).attr("props",JSON.stringify(t.props)),t.label&&$(t.selector).attr("label",t.label)})),window.customElements.define("action-button",r)},235:t=>{t.exports=Shiny},311:t=>{t.exports=jQuery}},t=>{t.O(0,[560],(()=>(391,t(t.s=391)))),t.O()}]);