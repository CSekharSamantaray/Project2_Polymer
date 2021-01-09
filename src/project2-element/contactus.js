import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import './shared-styles.js';



/**
 * @customElement
 * @polymer
 * This component (contactus.js) is used as a page in the application for displaying the Contact Us.
 */
class AppContactus extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
          :host {
            display: block;
          }
            .div_searchForm {
                width: 700px;
            }
        </style>
        
        <app-header reveals>
            <app-toolbar>
                <div main-title>CONTACT US</div>
            </app-toolbar>
        </app-header>

        <div class="div_searchForm" gap="10px">
            <span class="searchtitle">Let's discuss how we can help you.</span><br/>
            <hr>
            <span>We are very interested in contributing to your success. Your comments, suggestions, and questions will be most welcome. Please feel free to contact us at:</span>
        </div>

        <div class="div_searchForm" gap="10px">
            <span class="searchtitle">Our head office address:</span><br/>
            <hr>
            <span>#486, 1st floor, 1st Cross, Ashwath Nagar, <br/>Marathahalli, Bangalore - 560037</span>
        </div>

        <div class="div_searchForm" gap="10px">
            <span class="searchtitle">Call us :</span><br/>
            <hr>
            <span>080 48526352</span>
        </div>
        
        <div class="div_searchForm" gap="10px">
            <span class="searchtitle">Mail us:</span><br/>
            <hr>
            <span>info@uniquehire.in</span>
        </div>
        
    `;
  }
  static get properties() {
    return {
      title: {
        type: String,
        value: 'Contact Us'
      }
    };
  }
}

//Finally register the current component to the browser.
window.customElements.define('app-contactus', AppContactus);