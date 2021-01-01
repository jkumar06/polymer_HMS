import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-image/iron-image.js';

class doctorsList extends PolymerElement{

	
	static get properties() {
		
	}
	static get template(){
		  // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
		
		return html `
			<style>
			body{
				margin: 0;
				padding: 0;
				background: #544577ba;
			}
			.container {
				margin: auto 20px;
				display: block;
			}
			
			.card{
				background: whitesmoke;
				padding: 20px 0;
				padding-top: 0;
				width: 35%;
				float: left;
				margin: 20px;
				border-radius: 10px;
			}
			.card-title{
				margin: 0;
				text-align: center;
			}
			
			.card:hover {
				cursor: pointer;
				box-shadow: 0 0 5px black;
				transform: scale(1.1);
				transition: 2s;
			}
			
			a{
				text-decoration: none;
				color: black;
			}
			
			</style>
			<p style="font-size: 35px; text-align: center">Specialization Category</p>
			<div class="container">
			<div class="row">
				<div class="card">
				<a href="consult.html">
				<img src="./src/assets/Physician.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
					<p class="card-title">Pediactrician</p>
				</a>	
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/urologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Physician</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Gynaecologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Gynaecologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Dermatologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Dermatologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Orthopedician.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Orthopedician</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Cardiologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Cardiologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Surgeon.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title"> Surgeon</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Oncologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Oncologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Urologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Urologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Dentist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Dentist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Psychiatrist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Psychiatrist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Psychiatrist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Physiotherapist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Pediactrician.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Pediactrician</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Ophtalmologist.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Ophtalmologist</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Immunology.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Immunology</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Pediatrics.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Pediatrics</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Surgery.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Surgery</p>
					</a>
				</div>  
	
				<div class="card">
					<a href="consult.html">
						<img src="./src/assets/Radiology.jpg" width="100%" height="100px" style="border-radius: 10px;"> <br/><br/>
						<p class="card-title">Radiology</p>
					</a>
				</div>  
			</div>
		</div>	
		`
	}
}
customElements.define('doctors-element', doctorsList);