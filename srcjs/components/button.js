import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { bs5 } from '../css/bs5';
import 'Shiny';
import 'jQuery';

export class ActionButton extends LitElement {
	static styles = [bs5]

	static properties = {
		color: {type: String},
		count: {type: Number},
		name: {type: String},
		id: {type: String},
		size: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.count = 0;
		this.props = {};
		this.id = null;
		this.color = null;
		this.size = ""
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
		let size = '';
		switch(this.size){
			case 'small':
				size = 'btn-sm';
				break;
			case 'large':
				size = 'btn-lg';
				break;
		}
		return html`<button 
			@click="${this._increment}" 
			class='btn btn-${this.color} ${size}' 
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
