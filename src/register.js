import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-localstorage/iron-localstorage.js';
import '@polymer/iron-form/iron-form.js';


class register extends PolymerElement{
        
    static get template(){  
          // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html `
        <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <style>
            *{box-sizing:border-box;}
            html,body {margin: 0; padding: 0;}

            .container {
                margin: 10px 50px;
            }
            .form-group {
                margin:10px;
            }
            input {
                width: 70%;
                border: solid 1px #eee;
                padding: 11px 10px;
                margin-bottom: 15px;
                
            }
            button {
                width: 200px;
                padding: 15px;
                margin-left: 250px;
                background: none;
                outline: none;
                color: dodgerblue;
                border: solid 1px dodgerblue;
                cursor: pointer;
                border-radius: 33px;
                transition:all .38s ease-in-out;
            }
            button:hover {
                background: dodgerblue;
                color: fff;
            }
             tr, td, th {
                border: solid 1px #ccc;
				padding: 10px;
            }

        </style>
        
          <body>
          <div class="container">
              <h3>Patient Registration</h3>
              <!--- Iron Form Starts Here--->
              <iron-form>
              <!--<form is = "iron-form" id = "patientform"  name="patientform">-->
                  <div class="mdl-grid">
                  <div class="mdl-cell mdl-cell--6-col">
                 
                  <input type="text" name="fname" id="fname" value ="" placeholder="Name" required>
                  <div id="div1" style="color:red;"></div>
                  </div>
                  <div class = "mdl-cell mdl-cell--6-col">
                  <input type="text" name="address" id="address" value="" placeholder="Address" required>
                  <div id="div2" style="color:red;"></div>
                  </div>
                  <div class = "mdl-cell mdl-cell--6-col">
                  <input type="email" name="email" id="email" placeholder="Email" required>
                  <div id="div3" style="color:red;"></div>
                  </div>
                  <div class = "mdl-cell mdl-cell--6-col">
                  <input type="phone" name="phone" id="phone" value="" placeholder="Number" required>
                  <div id="div4" style="color:red;"></div>
                  </div>
                  <div class = "mdl-cell mdl-cell--4-col">
                  <input type="submit" on-click="addpatient">
                    
                  </div>
                  </iron-form>
                  <!--- Iron Form Ends here--->
              <!--</form>-->
              <h3>Registered Data</h3>
            <table style="width:90%">
                <tr>
                   
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <template is="dom-repeat" items="{{patientInfo}}">
                    <tr class="item">
                        <td class="mdl-data-table__cell--non-numeric">{{item.name}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.address}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.email}}</td>
                        <td class="mdl-data-table__cell--non-numeric">{{item.number}}</td>
                    </tr>
                </template>
            </table>
          </div>
      </body>
        `;
    }

    static get properties() {
        return {
          patientInfo: { type: Array },
          patlist : {
            type: Array,
            value: function() { return []; }
          },
          existingEntries: {
            type: Array,
            value: function() { return []; }
        }
        }
      }
    
      initializeDefaultPatientInfo() {
        this.patientInfo = {
          name: "",
          address: "",
          email: "",
          number: ""
        }
    }

    addpatient() {

		if (typeof(Storage) !== "undefined") {
				var fname =  this.$.fname.value;
			    var address = this.$.address.value; 
			    var email = this.$.email.value;
				var number = this.$.phone.value;
               
                //getting value from form
                
				if (fname == "") {
					//alert("Name must be filled out");
					this.$.div1.innerHTML = " Name must be filled out";
					this.$.div1.style.display = "block";
					return false;
				} else {
					this.$.div1.style.display = "none";
		}
		        if (address == "") {
			        //alert("Address must be filled out");
		         	this.$.div1.innerHTML = " Address must be filled out";
		        	this.$.div1.style.display = "block";
		        	return false;
		        } else {
			this.$.div1.style.display = "none";
		}
				if (email == "") {
			        //alert("Email must be filled out");
			        this.$.div1.innerHTML = " Email must be filled out";
			        this.$.div1.style.display = "block";
			        return false;
		        } else {
	       this.$.div1.style.display = "none";
		}
				if (number == "") {
					//alert("Email must be filled out");
					this.$.div1.innerHTML = " Number must be filled out";
					this.$.div1.style.display = "block";
					return false;
				} else {
			this.$.div1.style.display = "none";
        }			
	}
			let vals = {name: this.$.fname.value,
					   address: this.$.address.value, 
					   email: this.$.email.value,
					   number: this.$.phone.value};
            let pInfo = []
            if(this.patientInfo){
                pInfo = [...this.patientInfo,vals]
            }else{
                pInfo = [vals]
            }
			this.set('patientInfo',pInfo);
			console.log("patientdata: ", pInfo);
	
      }
    }


customElements.define('register-element',register);