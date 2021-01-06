import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';

/**
 * @customElement
 * @polymer
 */
class MainApp extends PolymerElement {
  constructor(){
		super()
	}
  static get template() {
      // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
    return html`
    <style>
      :host {
        display: block;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #544577ba;
        height: 100vh;
      }
      li {
        border-bottom: 3px solid #bbb;
        padding: 0 25px;
      }
    
      li:last-child {
        border-right: none;
      }
      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 25px;
        text-decoration: none;
      }
  
      li:hover:not(.active) {
        background-color: rgb(31, 182, 99);
      }
      .active {
        background-color: seashell;
      }
      #main-content {
        width: 100%;
        display: "";
        clear: both;
      }
      .menu-content {
        float: left;
        width: 20%;
        position: fixed;
        z-index: 1000;
        height: 100%;
        top: 0;
      }
      .body-content {
        width: 80%;
        margin-left: 20%;
        padding: 20px 40px;
      }
      @media screen and (max-width: 774px)  {
        .menu-content {
          width: 100%; 
          float: none;
          position: static;
        }
        ul {
            height: auto;
            overflow: auto;
            display: flex;
            flex-wrap: nowrap;
            justify-item: space-between;
          }
        li {
          border-right: 3px solid #bbb;
          padding: 0 50px;
          float: left;
        }
        li:last-child {
          border-right: 3px solid #bbb;
        } 
        li a {
          display: inline-block;
          padding: 12px 0;
        }
        .body-content {
          width: 100%;
          margin-left: 0;
          padding: 20px 40px;
        }
      } 
  </style>
    <section id="main-content">
        <app-location route="{{route}}"></app-location>
                    <!-- app-location binds to the app's URL -->
        <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" tail="{{subroute}}"></app-route>
                    <!-- this app-route manages the top-level routes -->
      <div class="menu-content">
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/doctors">Doctors</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/contact">Contact</a></li>
        
        </ul>    
      </div>
 
    <div class="body-content">
           <!-- Iron Pages Starts here -->
      <iron-pages selected="[[page]]" attr-for-selected="name" selected-attribute="visible" fallback-selection="404">
                   <!-- iron-pages selects the view based on the active route -->
        <home-element name="home"></home-element>
        <doctors-element name="doctors"></doctors-element>
        <register-element name="register"></register-element>
        <contact-element name="contact"></contact-element>
     </iron-pages>
            <!-- Iron Pages Ends here -->
    </div>
    </section>
    `;
  }

  static get properties() {
    return {
      page:{
        type: String,
        observer: '_pageChanged'
            // importing the page
      }
    };
  }

  static get observers(){
   return ['_routerChanged(routeData.page)'];  
      // to checks the routing data changes
  }

  _routerChanged(page){ 
      this.page = page || 'home';
  }
 /* Complex observer triggers on any changes in component. It is required to observe/set current page*/  

  _pageChanged(currentPage, oldPage){

    // console.log('Current Page is - ', currentPage);
    // console.log('Old Page is - ', oldPage);
    
	  switch(currentPage){
		case 'home':
			import('./home.js').then()
			break;
		case 'doctors':
			import('./doctors.js').then()
			break;
		case 'register':
        import('./register.js').then()
        break;
    case 'contact':
			import('./contact.js').then()
			break;
		default:
			this.page = 'home';
	  }
  }
}

window.customElements.define('main-app', MainApp);
