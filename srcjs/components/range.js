import { html, LitElement } from 'lit';
import { bs5 } from '../css/bs5';
import 'Shiny';
import 'jQuery';

export class Range extends LitElement {
	static styles = [bs5]

	static properties = {
		name: {type: String},
		id: {type: String},
		min: {type: String},
		max: {type: String},
		step: {type: String},
		value: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.props = {};
		this.id = null;
		this.min = null;
		this.max = null;
		this.step = null;
		this.value = null;
	}
	
	firstUpdated(){
		this._input = this.shadowRoot.querySelector('input');
	}

	_sendValue() {
		this.value = this._input.value;

		window.Shiny.setInputValue(
			this.name + ':litter.parse', 
			{
				props: this.props, 
				value: parseInt(this.value),
				id: this.id
			},
			{
				priority: 'event'
			}
		);
	}
	
	render() {
		return html`<input
			@input='${this._sendValue}'
			type='range'
			name='${this.name}'
			id='${this.id}'
			min='${this.min}'
			max='${this.max}'
			step='${this.step}'
			.value='${this.value}'
			props='${this.props}'
			class='form-range'>`;
	}
}

window.customElements.define('litter-range', Range);
