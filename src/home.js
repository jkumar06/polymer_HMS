import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class homeComp extends PolymerElement{
	static get properties() {
		
	}
	static get template(){
		  // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
		return html `
			<section id="img-section">
				<img src='https://img.freepik.com/free-vector/background-template-design-with-male-female-doctors_1308-42353.jpg?size=626&ext=jpg' width="93%" height="90%">
			</section>
			`
		}
}
customElements.define('home-element', homeComp);