import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';


/**
 * @customElement
 * @polymer
 * This component (login.js) is used in the application as the login page.
 */
class AppLogin  extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
            display: block;
            width: 50%;  
            width: 250px; 
            min-height: 300px; 
            padding: 35px; 
            border: solid 1px #837373; 
            background-color: #429c7c90; 
            margin: 0; 
            position: absolute; 
            top: 50%; 
            left: 41%; 
            transform: translate(-50%, -50%);
            }
            paper-button {
              height: 35px;
              background-color: darkcyan;
              margin-left: 0px;
            }
            .appHeader {
              font-size:1.2em;
            }
            .errormessage {
              display: none; 
              color: #d61010; 
              font-size: 14px;
            }

        </style>
        <app-location route="{{route}}"></app-location>
      
        <span class="appHeader">LOGIN FORM</span><br/>
        <paper-input label="Enter Username" id="inputusername" value="{{username}}" 
                      error-message="Please enter vallid username." char-counter maxlength="15" 
                      required pattern="*"></paper-input>  
        <paper-input label="Enter Password" type="password" id="inputpassword" value="{{passkey}}" 
                      error-message="Please enter your password." char-counter maxlength="15" 
                      required pattern="*"></paper-input><br/>
        <paper-button raised on-click="loginClick">LOGIN</paper-button><br/><br/>
        <span id="errormessage" class="errormessage"></span>
        
    `;
  }

  //Declare the properties for this component.
  static get properties() {
    // Declare 2 properties for username and password.
    return {
      username: {
        type: String,
        notify: true
      },
      passkey: {
        type: String,
        notify: true
      }
    };
  }

  //Function definition for Login button click method.
  loginClick() {
    // Clear the Error message first if there is any.
    this.$.errormessage.innerText = "";
    this.$.errormessage.style.display = "none"; 

    //vallidate the two input controls for blank entry and return if blank is found in any of the controls.
    this.$.inputusername.validate();
    this.$.inputpassword.validate();
    if(this.username == "" || this.passkey == ""){
      return;
    }

    // If username and password are vallid then navigate to the Application.
    if (this.username == "admin" && this.passkey == "admin" ){
      localStorage.setItem("username", this.username);
      this.$.inputusername.value = "";
      this.$.inputpassword.value = "";
      this.set('route.path', '/app-hotels');
    }
    // If username and password are not vallidated then display the error message.
    else{ 
      this.$.errormessage.style.display = "block";
      this.$.errormessage.innerText = "The user credentials entered are not correct. Please enter correct credentials to login.";
     }
  }
  
}

//Finally register the current component to the browser.
window.customElements.define('app-login', AppLogin);