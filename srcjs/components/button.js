import { html, css, LitElement } from 'lit';
import 'Shiny';
import 'jQuery';

export class ActionButton extends LitElement {
	static get styles() {
		return css`button{
				background-color: black;
				color: white;
			}`;
	}

	static properties = {
		class: {type: String},
		label: {type: String},
		count: {type: Number},
		name: {type: String},
		id: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.label = 'Click me';
		this.count = 0;
		this.props = {};
		this.id = null;
		this.class = null;
	}

	_increment(e) {
		this.count++
		window.Shiny.setInputValue(
			this.name + ':litter.parse', 
			{
				props: this.props, 
				count: this.count,
				id: this.id
			},
			{
				priority: 'event'
			}
		);
	}

	render() {
		return html`<button 
			@click="${this._increment}" 
			class='${this.class}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'>
			${this.label}
		</button>`;
	}
}

window.Shiny.addCustomMessageHandler('litter-action-button', (msg) => {
	$(msg.selector).attr('props', JSON.stringify(msg.props));
});

window.customElements.define('action-button', ActionButton);
