import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class contactUs extends PolymerElement{
	static get properties() {
		
	}
	static get template(){
		  // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
		
		return html `
			<p>This page consists of ContactUs</p>	
			<link rel="stylesheet" href="style.css">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css">
			<div class="contact-section">
			<div class="contact-info">
			  <div><i class="fas fa-map-marker-alt"></i>Bangalore, Karnataka, India</div>
			  <div><i class="fas fa-envelope"></i>Healthcare@email.com</div>
			  <div><i class="fas fa-phone"></i>+91 9876543210</div>
			  <div><i class="fas fa-clock"></i>Mon - Fri 8:00 AM to 5:00 PM</div>
			</div>
			<div class="contact-form">
			  <h2>Contact Us</h2>
			</div>
		  </div>

		  
		`
	}
}
customElements.define('contact-element',contactUs);