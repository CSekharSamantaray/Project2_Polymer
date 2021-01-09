import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-button/paper-button.js';
import './shared-styles.js';


/**
 * @customElement
 * @polymer
 * This component (hotels.js) is used as a page in the application for displaying the hotels listing.
 * This is the first page that is displayed in the application after the user logs in.
 */
class AppHotels extends PolymerElement {
  static get template() {
    return html`
        
        <style include="shared-styles">
          :host {
            display: block;
          }
        </style>

        <iron-ajax
          auto
          id="hotels_list_ajax"
          url="json/hotels.json"
          params='{"part":"snippet", "q":"polymer", "type": "json"}'
          handle-as="json"
          on-response="handleHotelsResponse"
          debounce-duration="300">
        </iron-ajax>
      
        <app-header reveals>
            <app-toolbar>
                <div main-title>HOTELS</div>
            </app-toolbar>
        </app-header>

        <div class="div_hotels_list">
            
            <dom-repeat items="[[hotelslist]]">
              <template strip-whitespace="">
              <div class="card">
                <img src="[[item.image]]" alt="Hotel Picture" class="hotelimg" media-simple="true">
                <div class="div_hotel_address">
                    <h3>[[item.hotelname]]</h3>
                    <span>[[item.addressline1]]</span><br/>
                    <span>[[item.addressline2]]</span><br/>
                    <span>[[item.phoneno]]</span><br/>
                    <span>[[item.email]]</span><br/>
                    <span>[[item.website]]</span>
                </div>
                <paper-button raised class="detailsbutton" on-click="" disabled >Details</paper-button>
              </div>
              </template>
            </dom-repeat>
          
        </div>
    `;
  }
  static get properties() {
    return {
      hotelslist: {
        type: Array,
        value: []
      }
    };
  }

  handleHotelsResponse(event, request){
    var response = request.response;  
    this.hotelslist = response.hotels;
  }
}

//Finally register the current component to the browser.
window.customElements.define('app-hotels', AppHotels);