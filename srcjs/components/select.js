import { html, css, LitElement } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import 'Shiny';
import 'jQuery';

export class Select extends LitElement {
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
		props: {}
	}

	constructor() {
		super();
		this.value = '';
		this.props = {};
		this.id = null;
		this.class = null;
	}
	
	render() {
		return html`<select
			class='${this.class}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			.value='${this.value}'>
			<slot></slot>
		</select>`;
	}
}

window.customElements.define('litter-select', Select);
