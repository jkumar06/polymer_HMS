import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';


class contactUs extends PolymerElement{
	static get properties() {	
	}
	static get template(){
		  // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
		
		return html `
		<style>
	
.container {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  margin-left: 15%;
}

#contact {
  background: #F9F9F9;
  padding: 25px;
  margin: 50px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
  text-align: center;
}

#submitBtn {
  background-color: #e7e7e7;
  border: none;
  color: black;
  padding: 16px 32px;
  text-decoration: none;
  margin: 0 auto;
  cursor: pointer;
  display: block;
}
#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #4CAF50;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}


.contactus {
	
	float: right
	margin: 50px 0;
	font-family: "Roboto", Helvetica, Arial, sans-serif;
	font-size: 15px;
	background-color: white;	
}
		
		</style>
			
      <div class="container">  
      <h3>Contact us</h3>
      <iron-form>
      <form is = "iron-form" id = "contactforms" method = "post"  name="contactus">
        <div class="mdl-grid">
          <div class="mdl-cell mdl-cell--6-col">
          <paper-input label="Enter First Name" name="fname" id="fname" required auto-validate error-message="First Name must be filled out"></paper-input>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
          <paper-input label="Enter last name" name="designation" id="des" required auto-validate error-message="lastname must be filled out"></paper-input>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
          <paper-input label="Enter phone number" name="phone" id="phone" required  auto-validate pattern="[0-9]*" error-message="Phone number must be filled out" maxlength="10"></paper-input>
          </div>
          <div class="mdl-cell mdl-cell--6-col">
          <paper-input type="email" label="Enter email" name="email" id="email" required auto-validate error-message="Email must be filled out"></paper-input>
          </div>
          <div class="mdl-cell mdl-cell--12-col">
          <button id="submitBtn" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Contact</button>
          </div>
        </div>                    
      </form>
    </iron-form>
</div>
		<div class="contactus">
	  <strong>Address</strong>
	  <p>Healthcare Hospitals</p>
      <p>Bangalore, Karntaka</p>
      <p>healthcare@gmail.com</p>
	  <p>9876543210</br>
         <p>India</br>
	</div>
			  
		`
	}
}
customElements.define('contact-element',contactUs);