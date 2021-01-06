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

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
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


fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
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
          <input type="submit" value="Submit" on-click="addpatient" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn">
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