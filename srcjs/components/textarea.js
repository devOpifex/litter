import { html, css, LitElement } from 'lit';
import { bs5 } from '../css/bs5';
import 'Shiny';
import 'jQuery';

export class TextArea extends LitElement {
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
		this._input = this.shadowRoot.querySelector('textarea');
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
	}
	
	render() {
		return html`<textarea
			@keyup='${this._sendValue}'
			type='text'
			class='form-control' 
			name='${this.name}'
			id='${this.id}'
			props='${this.props}'
			placeholder='${this.placeholder}'
			.value='${this.value}'></textarea>`;
	}
}

window.customElements.define('litter-textarea', TextArea);

window.Shiny.addCustomMessageHandler('litter-textarea-input', (msg) => {
	if(msg.props.length > 0)
		$(msg.selector).attr('props', JSON.stringify(msg.props));

	if(msg.value)
		$(msg.selector).attr('value', msg.value);
});
