import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-button/paper-button.js';


/**
 * @customElement
 * @polymer
 * This component (hotels.js) is used as a page in the application for displaying the hotels listing.
 * This is the first page that is displayed in the application after the user logs in.
 */
class AppHotels extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
            display: block;
            }

            .card {
                margin: 10px;
                padding: 10px;
                color: #757575;
                border-radius: 5px;
                background-color: #d5e0c3;
                max-width: 600px;
                min-width: 600px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                display: flex;
              }
              .div_hotels_list {
                padding-right: 20px;
              }
              .div_hotel_address h3 {
                color: #006b80;
                margin-top: 0px;
              }
              .div_hotel_address{
                  font-size: 12px;
                  padding-left: 15px;
                  width: 300px;
              }
              .detailsbutton {
                width: 80px;
                margin-left: 10px;
                float: right;
                height: 25px; 
                margin-top: 5px;
                background-color: #68d09d; 
                color: #3c3b3b;
                font-size: 12px;
                box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            }
        </style>

        <!--<iron-ajax
          auto
          id="hotels_list_ajax"
          url="http://dummy.restapiexample.com/api/v1/employees"
          params='{"part":"snippet", "q":"polymer", "key": "SOME_API_KEY", "type": "text"}'
          handle-as="json"
          on-response="handleHotelsResponse"
          debounce-duration="300">
        </iron-ajax>-->
      
        <app-header reveals>
            <app-toolbar>
                <div main-title>HOTELS</div>
            </app-toolbar>
        </app-header>

        <div class="div_hotels_list">
            <div class="card">
                <img src="../img/leela.jpg" alt="Mobirise" style="max-width:200px;" media-simple="true">
                <div class="div_hotel_address">
                    <h3>Leela Kempinski Hotel</h3>
                    <span>Saki Naka, Andheri East</span><br/>
                    <span>Mumbai, Maharashtra.</span><br/>
                    <span>Phone No. :022 45567889</span><br/>
                    <span>Email : hr@leelakempinski.org</span><br/>
                    <span>Wbsite : http://www.leelakempinski.org</span>
                </div>
                <paper-button raised class="detailsbutton" on-click="detailbuttonclicked">Details</paper-button>
            </div>
            <div class="card">
                <img src="../img/mayfair.jpg" alt="Mobirise" style="max-width:200px;" media-simple="true">
                <div class="div_hotel_address">
                    <h3>May Fair Lagoon Hotel</h3>
                    <span>East City, Chandrasekharpur</span><br/>
                    <span>Bhubaneswar, Odisha.</span><br/>
                    <span>Phone No. :0674 32659878</span><br/>
                    <span>Email : hr@mayfairlagoon.in</span><br/>
                    <span>Wbsite : http://www.mayfairlagoon.in</span>
                </div>
                <paper-button raised class="detailsbutton" on-click="detailbuttonclicked">Details</paper-button>
            </div>
            <div class="card">
                <img src="../img/tajpalace.jpg" alt="Mobirise" style="max-width:200px;" media-simple="true">
                <div class="div_hotel_address">
                    <h3>Taj Palace Hotel</h3>
                    <span>India Gate, Sea Beach Area</span><br/>
                    <span>Mumbai, Maharashtra.</span><br/>
                    <span>Phone No. :022 45563645</span><br/>
                    <span>Email : info@tajpalacemumbai.com</span><br/>
                    <span>Wbsite : http://www.tajpalacemumbai.com</span>
                </div>
                <paper-button raised class="detailsbutton" on-click="detailbuttonclicked">Details</paper-button>
            </div>
            <div class="card">
                <img src="../img/hotel1.jpg" alt="Mobirise" style="max-width:200px;" media-simple="true">
                <div class="div_hotel_address">
                    <h3>Country Inn Hotel</h3>
                    <span>Saileshree Vihar, Gandhi Road</span><br/>
                    <span>Bhubaneswar, Odisha.</span><br/>
                    <span>Phone No. :0674 32651245</span><br/>
                    <span>Email : reachus@countryinnhotel.com</span><br/>
                    <span>Wbsite : http://www.countryinnhotel.com</span>
                </div>
                <paper-button raised class="detailsbutton" on-click="detailbuttonclicked">Details</paper-button>
            </div>
            <div class="card">
                <img src="../img/hotel2.jpg" alt="Mobirise" style="max-width:200px;" media-simple="true">
                <div class="div_hotel_address">
                    <h3>Ginger Hotel</h3>
                    <span>Outer Ring Road, Near Paul Heights</span><br/>
                    <span>Bhubaneswar, Odisha.</span><br/>
                    <span>Phone No. :0674 32656453</span><br/>
                    <span>Email : contactus@gingerhotel.org</span><br/>
                    <span>Wbsite : http://www.gingerhotel.org</span>
                </div>
                <paper-button raised class="detailsbutton" on-click="detailbuttonclicked">Details</paper-button>
            </div>

        </div>
    `;
  }
  static get properties() {
    return {
      titles: {
        type: String,
        value: 'Hotels'
      }
    };
  }
}

window.customElements.define('app-hotels', AppHotels);