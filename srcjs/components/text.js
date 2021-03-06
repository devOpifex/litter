import { html, LitElement } from 'lit';
import { bs5 } from '../css/bs5';
import 'Shiny';
import 'jQuery';

export class Text extends LitElement {
	static styles = [bs5]

	static properties = {
		class: {type: String},
		value: {type: String},
		name: {type: String},
		id: {type: String},
		return: {type: String},
		placeholder: {type: String},
		props: {}
	}

	constructor() {
		super();
		this.return = 'enter';
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
		this.value = this._input.value;
		
		if(this.return == 'never')
			return;

		if(this.return == 'instant'){
			window.Shiny.setInputValue(
				this.name + ':litter.parse', 
				{
					props: this.props, 
					value: this.value,
					id: this.id
				},
				{
					priority: 'event'
				}
			);
			return;
		}

		if(event.keyCode != 13)
			return;

		window.Shiny.setInputValue(
			this.name + ':litter.parse', 
			{
				props: this.props, 
				value: this.value,
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
			class='form-control' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			placeholder='${this.placeholder}'
			.value='${this.value}'>`;
	}
}

window.customElements.define('litter-text', Text);

window.Shiny.addCustomMessageHandler('litter-text-input', (msg) => {
	if(msg.props.length > 0)
		$(msg.selector).attr('props', JSON.stringify(msg.props));

	if(msg.value)
		$(msg.selector).attr('value', msg.value);
});
