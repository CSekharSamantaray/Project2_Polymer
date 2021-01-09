import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';


let fList = [
    {
      trainid: '6E-2125',
      name: 'Tejas Express',
      departuretime: '06:25',
      departurefrom: 'Bangalore',
      arrivaltime: '09:45',
      destination: 'Mumbai',
      seattypes: {
        actypes:"Executive Chair, First Class, Two-Tier Class",
        nonactypes: "Sleeper Class, Second Class, General Class"
      }
    },
    {
      trainid: '6E-5354',
      name: 'Duronto Express',
      departuretime: '09:20',
      departurefrom: 'Bangalore',
      arrivaltime: '12:45',
      destination: 'Mumbai',
      seattypes: {
        actypes:"Executive Chair, First Class, Two-Tier Class",
        nonactypes: "Sleeper Class, Second Class, General Class"
      }
    },
    {
      trainid: 'I5-560 | I5-924',
      name: 'Shatabdi Express',
      departuretime: '13:20',
      departurefrom: 'Bangalore',
      arrivaltime: '16:45',
      destination: 'Mumbai',
      seattypes: {
        actypes:"Executive Chair, First Class, Two-Tier Class",
        nonactypes: "Sleeper Class, Second Class, General Class"
      }
    },
    {
      trainid: 'I5-993 | I5-1543',
      name: 'Rajdhani Express',
      departuretime: '13:20',
      departurefrom: 'Bangalore',
      arrivaltime: '16:45',
      destination: 'Mumbai',
      seattypes: {
        actypes:"Executive Chair, First Class, Two-Tier Class",
        nonactypes: "Sleeper Class, Second Class, General Class"
      }
    },
    {
      trainid: '6E-4012',
      name: 'Gatiman Express',
      departuretime: '11:00',
      departurefrom: 'Bangalore',
      arrivaltime: '14:10',
      destination: 'Mumbai',
      seattypes: {
        actypes:"Executive Chair, First Class, Two-Tier Class",
        nonactypes: "Sleeper Class, Second Class, General Class"
      }
    },
    {
      trainid: 'UK-995 | UK-851',
      name: 'Suvidha Express',
      departuretime: '11:10',
      departurefrom: 'Bangalore',
      arrivaltime: '14:25',
      destination: 'Mumbai',
      seattypes: {
        actypes:"Executive Chair, First Class, Two-Tier Class",
        nonactypes: "Sleeper Class, Second Class, General Class"
      }
    }
];

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
                width: 120px;
                margin-left: 24px;
                float: left;
            }
            .searchtitle {
              font-size:1em; 
              font-weight: bold; 
              color: #006b80;
            }
            .traindetail{
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
              #inputfrom {
                margin-left: 0px;
              }
              #journeydate {
                padding-top: 18px;
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
              #searchbutton {
                height: 35px; 
                margin-top: 22px; 
                background-color: #68d09d; 
                color: #3c3b3b;
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
    
        <div id="divtrainsheading" class="traindetail" style="display: block; color: #006b80; max-width: 700px; height: 45px; padding-top: 5px; background-color: #bac; border-radius: 0px; margin-bottom: 0px; margin-top: 0px; display: none;">
          <div style="display: inline-block; width: 120px; font-size: 13px;"><b>Train Name</b><br/><span style="font-size: 11px;">Train No.</span></div>
          <div style="display: inline-block; width: 120px; font-size: 13px;"><b>From Station</b><br/><span style="font-size: 12px;">Departure Time</span></div>
          <div style="display: inline-block; width: 120px; font-size: 13px;"><b>To Station</b><br/><span style="font-size: 12px;">Arrival Date/Time</span></div>
          <div style="display: inline-block; width: 110px; font-size: 11px;"><b>Seat Types Available<b><br/><span style="font-size: 12px;"><b>AC<b><br/><b>Non AC<b></span></div>
        </div>

        <div id="divtrainslist" style="display: none;">
          <dom-repeat items="[[trainslist]]">
            <template strip-whitespace="">
            <div class="traindetail">
              <div style="display: inline-block; width: 120px; height: 52px; font-size: 14px;"><b>{{item.name}}</b><br/><span style="font-size: 11px;">{{item.trainid}}</span></div>
              <div style="display: inline-block; width: 120px; height: 52px; font-size: 14px;"><b>{{item.departurefrom}}</b><br/><span style="font-size: 12px;">{{item.departuretime}}</span></div>
              <div style="display: inline-block; width: 120px; height: 52px; font-size: 14px;"><b>{{item.destination}}</b><br/><span style="font-size: 12px;">{{item.arrivaltime}}</span></div>
              <div style="display: inline-block; width: 257px; height: 52px; font-size: 11px;"><pre>{{item.seattypes.actypes}}<br/>{{item.seattypes.nonactypes}}</pre></div>
              <paper-button raised class="bookflightbutton" style="height: 25px; font-size: 12px; margin-top: 10px; margin-left: 15px; margin-bottom: 0px; background-color: #68d09d; color: #3c3b3b;" on-click="">Book</paper-button>
            </div>
            </template>
          </dom-repeat>
        </div>
    `;
  }
  static get properties() {
    return {
      trainslist: {
        type: Array,
        value: fList,
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
      this.$.divtrainsheading.style.display = "block";
      this.$.divtrainslist.style.display = "block";
    }
  }
}

window.customElements.define('app-rail', AppRail);