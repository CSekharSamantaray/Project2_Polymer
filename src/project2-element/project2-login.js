import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-ajax/iron-ajax.js';


/**
 * @customElement
 * @polymer
 */
class Project2Login extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
            display: block;
            width: 50%; min-width: 200px; max-width: 250px ;min-height: 300px; padding: 35px; border: solid 1px #837373; 
            background-color: #429c7c90; margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            }
            paper-button {
              height: 35px;
              background-color: darkcyan;
              margin-left: 0px;
            }

        </style>
        <app-location route="{{route}}"></app-location>
      
        <span id="appHeader" style="font-size:1.2em;">LOGIN FORM</span><br/>
        <paper-input label="Enter Username" id="inputusername" value="{{username}}"></paper-input>  
        <paper-input label="Enter Password" type="password" id="inputpassword" value="{{username}}></paper-input><br/>
        <span><paper-button raised on-click="loginClick">LOGIN</paper-button>
        <paper-button raised on-click="registerUserClick">REGISTER</paper-button></span><br/><br/>
        <span id="warningmsg" style="display: none; color: #800808; font-size: 14px;">The user credentials entered are not correct. Please enter correct credentials to login.</span>
        
        <iron-ajax
          id="login_click_iron_ajax"
          method="get"
          url="http://dummy.restapiexample.com/api/v1/employee/1"
          params='{"part":"snippet", "q":"polymer", "user":"{{username}}", "password": "{{pass}}"}'
          handle-as="json"
          on-response="handleLoginResponse"
          debounce-duration="300">
        </iron-ajax>
    `;
  }
  static get properties() {
    return {
      response: {
        type: String,
        value: "Waiting",
        notify: true
      },
      username: {
        type: String,
        notify: true
      },
      pass: {
        type: String,
        notify: true
      }
    };
  }

  loginClick() {
    var usr = this.username; //this.$.inputusername.value;
    var pass = this.pass;    //this.$.inputpassword.value;
    // Clear the Warning message first if there is any.
    this.$.warningmsg.style.display = "none"; 
    this.$.warningmsg.innerText = "";
    // If username and password are vallid then navigate to the Home page.
    if (usr == "admin" && pass == "admin" ){
      //sessionStorage.setItem("username", usr);
      localStorage.setItem("username", this.username);
      this.$.inputusername.value = "";
      this.$.inputpassword.value = "";
      this.set('route.path', '/project2-hotels');
    }
    // If username and password are not vallidated then display the error message.
    else{ 
      this.$.warningmsg.style.display = "block";
      if(usr == ""){
        this.$.warningmsg.innerText = "Please enter the username.";
      }
      else if(pass == ""){
        this.$.warningmsg.innerText = "Please enter the password.";
      }
      else if (usr != "admin" || pass != "admin"){
        this.$.warningmsg.innerText = "The user credentials entered are not correct. Please enter correct credentials to login.";
      }
     }

    // we should call the iron ajax method to vallidate the username and password from the server side and redirect if vallidated.
    //this.$.login_click_iron_ajax.generateRequest();
  }

  registerUserClick(){
    alert("I am yet to work on this functionality. Please have some patience...");
  }

  handleLoginResponse(event, request) {
    var response = request.response;  
    console.log(response);  
  }
  
  
}

window.customElements.define('project2-login', Project2Login);