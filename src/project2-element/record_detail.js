import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import './shared-styles.js';



/**
 * @customElement
 * @polymer
 * This component (record_detail.js) is used as a component for displaying the flight details or 
 * train details in Aviation page (aviation.js) and Railways page (rail.js).
 */
class RecordDetail extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
            :host {
              display: block;
            }
        </style>

          <dom-repeat items="[[datalist]]">
            <template strip-whitespace="">
            <div class="flightdetail">
              <div class="detailAirlines"><b>{{item.name}}</b><br/><span>{{item.id}}</span></div>
              <div class="detailDeparture"><b>{{item.departurefrom}}</b><br/><span>{{item.departuretime}}</span></div>
              <div class="detailDeparture"><b>{{item.destination}}</b><br/><span>{{item.arrivaltime}}</span></div>
              <div class="detailBaggage"><pre><span>{{item.detail1}}</span><br/><span>{{item.detail2}}</span></pre></div>
              <paper-button raised class="bookbutton" disabled on-click="">Book</paper-button>
            </div>
            </template>
          </dom-repeat>
        
    `;
  }

  //Declare the properties for this component.
  static get properties() {
    return {
      datalist: {
        type: Array,
        value: [],
        notify: true
      },
    };
  }

}

//Finally register the current component to the browser.
window.customElements.define('record-detail', RecordDetail);