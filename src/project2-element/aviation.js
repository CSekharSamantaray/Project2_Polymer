import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';


/**
 * @customElement
 * @polymer
 * This component (aviation.js) is used as a page in the application for displaying the flight details.
 * There is a search bar at the top of the page for searching the flights from one city to another city.
 * Clicking on the search button should display the list of flights. Currently the data is static as we 
 * do not have a proper API in any servers for our application. 
 * 
 */
class AppAviation extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
            :host {
                display: block;
            }
        </style>
      
        <app-header reveals>
            <app-toolbar>
                <div main-title>AVIATION</div>
            </app-toolbar>
        </app-header>
        
        <div class="div_searchForm" gap="10px">
            <span class="searchtitle">Search Flights</span><br/>
            <hr>
            <span>
            <paper-radio-group selected="OneWayJourney" id="journeytype">
              <paper-radio-button name="OneWayJourney" on-click="radioclicked">One Way Journey</paper-radio-button>
              <paper-radio-button name="ReturnJourney" on-click="radioclicked">Return Journey</paper-radio-button>
            </paper-radio-group>
            </span><br/>
            <paper-input label="From" id="inputfrom" required class="searchControls" 
                          error-message="Enter From." char-counter maxlength="30" 
                          required pattern="*" value=""></paper-input>      
            <paper-input label="To" id="inputto" required class="searchControls" 
                          error-message="Enter To." char-counter maxlength="30" 
                          required pattern="*" value=""></paper-input>
            <vaadin-date-picker id="journeydate" class="searchControls" placeholder="Journey Date" required 
                          error-message="Enter Date." value="" min="2021-01-11" max="2021-12-31"></vaadin-date-picker>
            <vaadin-date-picker id="returndate" class="searchControls" placeholder="Return Date" required
                          error-message="Enter Date." value="" min="2021-01-11" max="2021-12-31" 
                          disabled="[[returndateenabled]]"></vaadin-date-picker>
            <paper-button id="searchbutton" raised class="searchControls" on-click="searchFlights">SEARCH</paper-button>
        </div>

        <div id="divflightsheading" class="flightdetail">
          <div class="headingAirlines"><b>Airlines</b><br/><span>Flight No.</span></div>
          <div class="headingDeparture"><b>Departure From</b><br/><span>Departure Time</span></div>
          <div class="headingDeparture"><b>Destination</b><br/><span>Arrival Time</span></div>
          <div class="headingBaggageDetails">BAGGAGE DETAILS</div>
        </div>

        <div id="divflightlist" style="display: none;">
          <dom-repeat items="[[flightlist]]">
            <template strip-whitespace="">
            <div class="flightdetail">
              <div class="detailAirlines"><b>{{item.flightname}}</b><br/><span>{{item.flightid}}</span></div>
              <div class="detailDeparture"><b>{{item.departurefrom}}</b><br/><span>{{item.departuretime}}</span></div>
              <div class="detailDeparture"><b>{{item.destination}}</b><br/><span>{{item.arrivaltime}}</span></div>
              <div class="detailBaggage"><pre><span>ADULT : {{item.adultcheckin}}  {{item.adultcabin}}</span><br/><span>CHILD : {{item.childcheckin}}  {{item.childcabin}}</span></pre></div>
              <paper-button raised class="bookflightbutton" disabled on-click="">Book</paper-button>
            </div>
            </template>
          </dom-repeat>
        </div>

        <iron-ajax
          id="flight_list_ajax"
          url="json/flights.json"
          params='{"part":"snippet", "q":"polymer", "type": "json"}'
          handle-as="json"
          on-response="handleFlightsResponse"
          debounce-duration="300">
        </iron-ajax>
    `;
  }
  static get properties() {
    return {
      returndateenabled: {
        type: Boolean,
        value: true
      },
      flightlist: {
        type: Array,
        value: [],
        notify: true
      },
    };
  }

  //Function called when radio button is clicked.
  radioclicked(){
    let jType = this.shadowRoot.querySelector('#journeytype').selected;
    // Enable or disable the Return Date field based on the radio button selected.
    if (jType == "OneWayJourney"){
      this.shadowRoot.querySelector('#returndate').value = "";
      this.returndateenabled = true;
    }
    else if (jType == "ReturnJourney") {
      this.returndateenabled = false;
    }
  }

  //Function called when the search button is clicked.
  searchFlights(){
    // Clear the search result from the page.
    this.$.divflightsheading.style.display = "none";
    this.$.divflightlist.style.display = "none";
    let vallidated = true;

    //vallidate the two input controls for blank entry.
    if(this.$.inputfrom.validate() == false)
      vallidated = false;
    if(this.$.inputto.validate() == false)
      vallidated = false;
    
    //vallidate the two date controls for blank entry.
    if(this.$.journeydate.validate() == false)
      vallidated = false;
    if(this.$.returndate.validate() == false)
      vallidated = false;
    
    
    //If Vallidation of the controls is true then call the iron ajax to get the results from the server side.
    if (vallidated == true){
      this.$.flight_list_ajax.generateRequest();
    }
  }

  //Result handler function for iron-ajax control.
  handleFlightsResponse(event, request){
    var response = request.response;  
    this.flightlist = response.flights;
    this.$.divflightsheading.style.display = "block";
    this.$.divflightlist.style.display = "block";
  }
}

//Finally register the current component to the browser.
window.customElements.define('app-aviation', AppAviation);