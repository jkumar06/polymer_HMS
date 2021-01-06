import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';


class register extends PolymerElement{
        
    static get template(){  
          // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html `
        <link rel="stylesheet" href="/node_modules/material-design-lite/material.min.css">
    <script src="/node_modules/material-design-lite/material.min.js"></script>
   
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
                width:100px;
                margin:0 50%;
                position:relative;
                border: solid 1px #eee;
                padding: 11px 10px;
                left:-70px
                }     
             tr, td, th {
                border: solid 1px #ccc;
                padding: 10px;
                text-align: center;
                box-sizing: border-box;
                white-space: nowrap;
            }
           
            tr.iron-selected td {
              background-color: rgba(0, 0, 0, 0.1);
            }
            tr:hover td {
              background-color: rgba(0, 0, 0, 0.2);
            }
            tr td.iron-selected:not(:nth-of-type(1)) {
              background-color: rgba(255, 255, 0, 0.2);
            }

        </style>
        
          <body>
          <div class="container">
              <h3>Patient Registration</h3>
              <!--- Iron Form Starts Here--->
              <iron-form>
              <form is = "iron-form" id = "patientform"  name="patientform">
                <div class="mdl-grid">
                  <div class="mdl-cell mdl-cell--6-col">
                  <paper-input label="Enter First Name" name="fname" id="fname" required auto-validate error-message="First Name must be filled out"></paper-input>
                  </div>
                  <div class="mdl-cell mdl-cell--6-col">
                  <paper-input label="Enter Address" name="address" id="address" required auto-validate error-message="Enter address here"></paper-input>
                  </div>
                  <div class="mdl-cell mdl-cell--6-col">
                  <paper-input type="email" label="Enter email" name="email" id="email" required auto-validate error-message="Email must be filled out"></paper-input>
                  </div>
                  <div class="mdl-cell mdl-cell--6-col">
                  <paper-input label="Enter phone number" name="number" id="phone" required  auto-validate pattern="[0-9]*" error-message="Phone number must be filled out" maxlength="10"></paper-input>
                  </div>
                  <div class="mdl-cell mdl-cell--12-col">
                  <input type="submit" value="Submit" on-click="addpatient" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent btn">
                  </div>
                </div>                    
              </form>
            </iron-form>
                  <!--- Iron Form Ends here--->
              
              <h3>Registered Data</h3>
            <table is="s-table-lite" fixed-column style="width:90%">
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                <template is="dom-repeat" items="{{patientInfo}}">
                    <tr class="item">
                        <td class="mdl-data-table__cell--non-numeric">[[item.name]]</td>
                        <td class="mdl-data-table__cell--non-numeric">[[item.address]]</td>
                        <td class="mdl-data-table__cell--non-numeric">[[item.email]]</td>
                        <td class="mdl-data-table__cell--non-numeric">[[item.number]]</td>
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

			let vals = {name: this.$.fname.value,
					   address: this.$.address.value, 
					   email: this.$.email.value,
                       number: this.$.phone.value};
                //getting values from patient form
            let pInfo = []
            if(this.patientInfo){
                pInfo = [...this.patientInfo,vals]
                //storing patientInfo values to pInfo
            }else{
                pInfo = [vals]
            }
			this.set('patientInfo',pInfo);
			console.log("patientdata: ", pInfo);
	
      }
    }

customElements.define('register-element',register);