import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';



/**
 * @customElement
 * @polymer
 * This component (contactus.js) is used as a page in the application for displaying the Contact Us.
 */
class AppContactus extends PolymerElement {
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
                width: 700px;
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
                display: inline-block;
                padding-left: 15px;
            }
            .searchtitle {
                font-size:1em; 
                font-weight: bold; 
                color: #006b80;
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

window.customElements.define('app-contactus', AppContactus);