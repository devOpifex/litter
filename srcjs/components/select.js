import { html, LitElement } from 'lit';
import { bs5 } from '../css/bs5';
import 'Shiny';
import 'jQuery';

export class Select extends LitElement {
	static styles = [bs5]

	static properties = {
		name: {type: String},
		id: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.props = {};
		this.id = null;
	}
	
	render() {
		return html`<select
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			class='form-select'>
			<slot></slot>
		</select>`;
	}
}

window.customElements.define('litter-select', Select);
