import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';

let fList = [
  {
    flightid: '6E-2125',
    name: 'Indigo',
    departuretime: '06:25',
    departurefrom: 'Bangalore',
    arrivaltime: '09:45',
    destination: 'Mumbai',
    baggage: {
      adultcheckin:"15 kgs (1 peice only)",
      adultcabin: "7 Kgs (1 piece only)",
      childcheckin: "10 kgs (1 peice only)",
      childcabin: "7 kgs (1 peice only)"
    }
  },
  {
    flightid: '6E-5354',
    name: 'Indigo',
    departuretime: '09:20',
    departurefrom: 'Bangalore',
    arrivaltime: '12:45',
    destination: 'Mumbai',
    baggage: {
      adultcheckin:"15 kgs (1 peice only)",
      adultcabin: "7 Kgs (1 piece only)",
      childcheckin: "10 kgs (1 peice only)",
      childcabin: "7 kgs (1 peice only)"
    }
  },
  {
    flightid: 'I5-560 | I5-924',
    name: 'AirAsia',
    departuretime: '13:20',
    departurefrom: 'Bangalore',
    arrivaltime: '16:45',
    destination: 'Mumbai',
    baggage: {
      adultcheckin:"15 kgs (1 peice only)",
      adultcabin: "7 Kgs (1 piece only)",
      childcheckin: "10 kgs (1 peice only)",
      childcabin: "7 kgs (1 peice only)"
    }
  },
  {
    flightid: 'I5-993 | I5-1543',
    name: 'AirAsia',
    departuretime: '13:20',
    departurefrom: 'Bangalore',
    arrivaltime: '16:45',
    destination: 'Mumbai',
    baggage: {
      adultcheckin:"15 kgs (1 peice only)",
      adultcabin: "7 Kgs (1 piece only)",
      childcheckin: "10 kgs (1 peice only)",
      childcabin: "7 kgs (1 peice only)"
    }
  },
  {
    flightid: '6E-4012',
    name: 'Indigo',
    departuretime: '11:00',
    departurefrom: 'Bangalore',
    arrivaltime: '14:10',
    destination: 'Mumbai',
    baggage: {
      adultcheckin:"15 kgs (1 peice only)",
      adultcabin: "7 Kgs (1 piece only)",
      childcheckin: "10 kgs (1 peice only)",
      childcabin: "7 kgs (1 peice only)"
    }
  },
  {
    flightid: 'UK-995 | UK-851',
    name: 'Vistara',
    departuretime: '11:10',
    departurefrom: 'Bangalore',
    arrivaltime: '14:25',
    destination: 'Mumbai',
    baggage: {
      adultcheckin:"15 kgs (1 peice only)",
      adultcabin: "7 Kgs (1 piece only)",
      childcheckin: "10 kgs (1 peice only)",
      childcabin: "7 kgs (1 peice only)"
    }
  },
  {
    flightid: 'AI-851 | AI-528',
    name: 'Air India',
    departuretime: '12:10',
    departurefrom: 'Bangalore',
    arrivaltime: '14:45',
    destination: 'Mumbai',
    baggage: {
      adultcheckin:"15 kgs (1 peice only)",
      adultcabin: "7 Kgs (1 piece only)",
      childcheckin: "10 kgs (1 peice only)",
      childcabin: "7 kgs (1 peice only)"
    }
  },
  {
    flightid: 'SG-2871 | SG-3024',
    name: 'Spice Jet',
    departuretime: '13:40',
    departurefrom: 'Bangalore',
    arrivaltime: '16:55',
    destination: 'Mumbai',
    baggage: {
      adultcheckin:"15 kgs (1 peice only)",
      adultcabin: "7 Kgs (1 piece only)",
      childcheckin: "10 kgs (1 peice only)",
      childcabin: "7 kgs (1 peice only)"
    }
  }
];

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
            .flightdetail{
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
              margin-bottom: 5px;
            }
            .searchControls {
                width: 120px;
                margin-left: 24px;
                float: left;
            }
            #inputfrom {
              margin-left: 0px;
            }
            #journeydate, #returndate {
              padding-top: 18px;
            }
            .searchtitle {
              font-size:1em; 
              font-weight: bold; 
              color: #006b80;
            }
            paper-radio-button {
              padding-left: 0px;
            }
            #searchbutton {
              height: 35px; 
              margin-top: 22px; 
              background-color: #68d09d; 
              color: #3c3b3b;
            }
            .errormessage {
              display: none; 
              color: #d61010; 
              font-size: 14px;
              margin-left: 0px;
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

        <div id="divflightsheading" class="flightdetail" style="color: #006b80; max-width: 700px; max-height: 35px; padding-top: 5px; background-color: #bac; border-radius: 0px; margin-bottom: 0px; margin-top: 0px; display: none;">
          <div style="display: inline-block; min-width: 110px; max-width: 110px;font-size: 13px;"><b>Airlines</b><br/><span style="font-size: 11px;">Flight No.</span></div>
          <div style="display: inline-block; min-width: 100px; max-width: 100px;font-size: 13px;"><b>Departure From</b><br/><span style="font-size: 12px;">Departure Time</span></div>
          <div style="display: inline-block; min-width: 100px; max-width: 100px;font-size: 13px;"><b>Destination</b><br/><span style="font-size: 12px;">Arrival Time</span></div>
          <div style="display: inline-block; min-width: 110px; font-size: 11px;"><b>BAGGAGE DETAILS<b></div>
        </div>

        <div id="divflightlist" style="display: none;">
          <dom-repeat items="[[flightlist]]">
            <template strip-whitespace="">
            <div class="flightdetail">
              <div style="display: inline-block; min-width: 110px; max-width: 110px;font-size: 14px;"><b>{{item.name}}</b><br/><span style="font-size: 11px;">{{item.flightid}}</span></div>
              <div style="display: inline-block; min-width: 100px; max-width: 100px;font-size: 14px;"><b>{{item.departurefrom}}</b><br/><span style="font-size: 12px;">{{item.departuretime}}</span></div>
              <div style="display: inline-block; min-width: 100px; max-width: 100px;font-size: 14px;"><b>{{item.destination}}</b><br/><span style="font-size: 12px;">{{item.arrivaltime}}</span></div>
              <div style="display: inline-block; min-width: 110px; font-size: 11px;"><pre><span>ADULT : {{item.baggage.adultcheckin}}  {{item.baggage.adultcabin}}</span><br/><span>CHILD : {{item.baggage.childcheckin}}  {{item.baggage.childcabin}}</span></pre></div>
              <paper-button raised class="bookflightbutton" style="height: 25px; font-size: 12px; margin-top: 10px; margin-left: 15px; margin-bottom: 0px; background-color: #68d09d; color: #3c3b3b;" on-click="">Book</paper-button>
            </div>
            </template>
          </dom-repeat>
        </div>
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
        value: fList,
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
    
    
    //Show the 2 divs containing the header and the search results if the vallidation is true.
    if (vallidated == true){
      this.$.divflightsheading.style.display = "block";
      this.$.divflightlist.style.display = "block";
    }
  }
}

window.customElements.define('app-aviation', AppAviation);