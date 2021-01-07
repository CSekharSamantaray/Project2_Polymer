import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';



/**
 * @customElement
 * @polymer
 */
class Project2Aviation extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
                display: block;
            }
            .div_searchForm {
                margin: 10px;
                padding: 10px;
                color: #757575;
                border-radius: 5px;
                background-color: #d5e0c3;
                max-width: 800px;
                min-width: 700px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                display: inline-block;
                padding-left: 15px;
            }
            .searchControls {
                min-width: 120px;
                max-width: 130px;
                margin-left: 10px;
                float: left;
            }
        </style>
      
        <app-header reveals>
            <app-toolbar>
                <div main-title>AVIATION</div>
            </app-toolbar>
        </app-header>
        
        <div class="div_searchForm" gap="10px">
            <span id="appHeader" style="font-size:1em;">Search Flights</span><br/>
            <paper-input label="From" id="inputfrom" required class="searchControls" style="margin-left: 0px;"></paper-input>      
            <paper-input label="To" id="inputto" required class="searchControls"></paper-input>
            <vaadin-date-picker id="journeydate" class="searchControls" placeholder="Journey Date" value="" min="2021-01-01" max="2021-12-31" style="padding-top: 18px;"></vaadin-date-picker>
            <vaadin-date-picker id="returndate" class="searchControls" placeholder="Return Date" value="" min="2021-01-01" max="2021-12-31" style="padding-top: 18px;" ></vaadin-date-picker>
            <!--<paper-input label="No of Passengers" id="inputnoofpassengers" required class="searchControls" type="number" min="1" max="10" style="max-width:80px;"></paper-input><br/><br/><br/>-->
            <paper-button raised class="searchControls" on-click="searchFlight" style="height: 35px; margin-left: 0px;">Flights</paper-button>
        </div>

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'project2-aviation'
      }
    };
  }
}

window.customElements.define('project2-aviation', Project2Aviation);