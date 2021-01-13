import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './shared-styles.js';
import './record_detail.js';

/**
 * @customElement
 * @polymer
 * This component (rail.js) is used as a page in the application for displaying the train details.
 * There is a search bar at the top of the page for searching the trains from one city to another city.
 * Clicking on the search button should display the list of trains. Currently the data is static as we 
 * do not have a proper API in any servers for our application. 
 */
class AppRail extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
            :host {
              display: block;
            }
            
        </style>
      
        <app-header reveals>
            <app-toolbar>
                <div main-title>RAILWAYS</div>
            </app-toolbar>
        </app-header>

        <div class="div_searchForm" gap="10px">
            <span class="searchtitle">Search Trains</span><br/>
            <hr>
            <paper-input label="From" id="inputfrom" required class="searchControls" value=""
                          error-message="Enter From." char-counter maxlength="30" required pattern="*"></paper-input>      
            <paper-input label="To" id="inputto" required class="searchControls" value=""
                          error-message="Enter To." char-counter maxlength="30" required pattern="*"></paper-input>
            <vaadin-date-picker id="journeydate" class="searchControls" placeholder="Journey Date" required
                          error-message="Enter Date." value="" min="2021-01-11" max="2021-12-31"></vaadin-date-picker>
            <paper-input label="No of Passengers" id="noofpassengers" class="searchControls" type="number" min="1" 
                          error-message="Enter Value." char-counter maxlength="30" required pattern="*" max="10" ></paper-input>
            <paper-button id="searchbutton" class="searchControls" raised  on-click="searchTrains">SEARCH</paper-button>
        </div>
    
        <div id="divtrainsheading" class="traindetail">
          <div class="headingTrains"><b>Train Name</b><br/><span>Train No.</span></div>
          <div class="headingTrains"><b>From Station</b><br/><span>Departure Time</span></div>
          <div class="headingTrains"><b>To Station</b><br/><span">Arrival Date/Time</span></div>
          <div class="headingSeatDetails"><span>AC Seat Types<br/>Non AC Seat Types</span></div>
        </div>

        <div id="divtrainslist" style="display: none;">
          <!--<dom-repeat items="[[trainslist]]">
            <template strip-whitespace="">
            <div class="traindetail">
              <div class="detailTrains"><b>{{item.trainname}}</b><br/><span>{{item.trainid}}</span></div>
              <div class="detailTrains"><b>{{item.departurefrom}}</b><br/><span>{{item.departuretime}}</span></div>
              <div class="detailTrains"><b>{{item.destination}}</b><br/><span>{{item.arrivaltime}}</span></div>
              <div class="detailSeatTypes">{{item.actypes}}<br/>{{item.nonactypes}}</div>
              <paper-button raised class="booktrainbutton" disabled on-click="">Book</paper-button>
            </div>
            </template>
          </dom-repeat>-->
          <record-detail datalist="[[trainslist]]"></record-detail>
        </div>

        <iron-ajax
          id="trains_list_ajax"
          url="json/trains.json"
          params='{"part":"snippet", "q":"polymer", "type": "json"}'
          handle-as="json"
          on-response="handleTrainsResponse"
          debounce-duration="300">
        </iron-ajax>
    `;
  }

  //Declare the properties for this component.
  static get properties() {
    return {
      trainslist: {
        type: Array,
        value: [],
        notify: true
      }
    };
  }

  //Function called when the search button is clicked.
  searchTrains(){
    // Clear the search result from the page.
    this.$.divtrainsheading.style.display = "none";
    this.$.divtrainslist.style.display = "none";
    let vallidated = true;

    //vallidate the two input controls for blank entry.
    if(this.$.inputfrom.validate() == false)
      vallidated = false;
    if(this.$.inputto.validate() == false)
      vallidated = false;

    //vallidate the date control for blank entry.
    if(this.$.journeydate.validate() == false)
      vallidated = false;

    //vallidate the No of Passengers control for blank entry.
    if(this.$.noofpassengers.validate() == false)
      vallidated = false;
    
    //Show the 2 divs containing the header and the search results if the vallidation is true.
    if (vallidated == true){
      this.$.trains_list_ajax.generateRequest();
    }
  }

  //Result handler function for iron-ajax control.
  handleTrainsResponse(event, request) {
    var response = request.response;  
    this.trainslist = response.trains;
    this.$.divtrainsheading.style.display = "block";
    this.$.divtrainslist.style.display = "block";
  }
}


//Finally register the current component to the browser.
window.customElements.define('app-rail', AppRail);