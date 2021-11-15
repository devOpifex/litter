"use strict";(self.webpackChunklitter=self.webpackChunklitter||[]).push([[661],{546:(t,e,s)=>{var r=s(897),i=s(331);s(235),s(311);class a extends r.oi{static styles=[i.Z];static properties={class:{type:String},value:{type:String},name:{type:String},id:{type:String},return:{type:String},placeholder:{type:String},props:{}};constructor(){super(),this.return="enter",this._input={},this.value="",this.placeholder="",this.props={},this.id=null,this.class=null}firstUpdated(){this._input=this.shadowRoot.querySelector("textarea")}_sendValue(t){this.value=this._input.value,"never"!=this.return&&("instant"!=this.return||window.Shiny.setInputValue(this.name+":litter.parse",{props:this.props,value:this.value,id:this.id},{priority:"event"}))}render(){return r.dy`<textarea
			@keyup='${this._sendValue}'
			type='text'
			class='form-control' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			placeholder='${this.placeholder}'
			.value='${this.value}'></textarea>`}}window.customElements.define("litter-textarea",a),window.Shiny.addCustomMessageHandler("litter-textarea-input",(t=>{t.props.length>0&&$(t.selector).attr("props",JSON.stringify(t.props)),t.value&&$(t.selector).attr("value",t.value)}))},235:t=>{t.exports=Shiny},311:t=>{t.exports=jQuery}},t=>{t.O(0,[560,565],(()=>(546,t(t.s=546)))),t.O()}]);