import { html, css, LitElement } from 'lit';
import 'Shiny';
import 'jQuery';

export class Text extends LitElement {
	static get styles() {
		return css`input{
				background-color: white;
				color: black;
			}`;
	}

	static properties = {
		class: {type: String},
		value: {type: String},
		name: {type: String},
		id: {type: String},
		placeholder: {type: String},
		props: {}
	}

	constructor() {
		super();

		this._input = {};
		this.value = '';
		this.placeholder = '';
		this.props = {};
		this.id = null;
		this.class = null;
	}

	firstUpdated(){
		this._input = this.shadowRoot.querySelector('input');
	}

	_sendValue(event) {
		if(event.keyCode != 13)
			return;

		window.Shiny.setInputValue(
			this.name + ':litter.parse', 
			{
				props: this.props, 
				value: this._input.value,
				id: this.id
			},
			{
				priority: 'event'
			}
		);
	}
	
	render() {
		return html`<input
			@keyup='${this._sendValue}'
			type='text'
			class='${this.class}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			placeholder='${this.placeholder}'
			value='${this.value}'>`;
	}
}

window.customElements.define('text-input', Text);