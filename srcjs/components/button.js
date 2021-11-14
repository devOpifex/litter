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
		count: {type: Number},
		name: {type: String},
		id: {type: String},
		callback: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.count = 0;
		this.props = {};
		this.id = null;
		this.class = null;
	}

	_increment(e) {
		this.count++

		if(this.callback){
			let cb = eval(this.callback);
			cb(this);
			return ;
		}

		window.Shiny.setInputValue(
			this.name + ':litter.parse', 
			{
				props: this.props, 
				value: this.count,
				id: this.id
			},
			{
				priority: 'event'
			}
		);
	}

	get _slottedChildren() {
		const slot = this.shadowRoot.querySelector('slot');
		return slot;
	}

	render() {
		return html`<button 
			@click="${this._increment}" 
			class='${this.class}' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'>
			<slot></slot>
		</button>`;
	}
}

window.Shiny.addCustomMessageHandler('litter-action-button', (msg) => {
	if(msg.props.length > 0)
		$(msg.selector).attr('props', JSON.stringify(msg.props));

	if(msg.content)
		$(msg.selector)
			.children()
			.html(msg.content)
});

window.customElements.define('litter-button', ActionButton);
