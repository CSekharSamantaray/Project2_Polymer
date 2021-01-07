import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';



/**
 * @customElement
 * @polymer
 */
class Project2Contactus extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
            display: block;
            }
        </style>
        
        <app-header reveals>
            <app-toolbar>
                <div main-title>CONTACT US</div>
            </app-toolbar>
        </app-header>

        <div class="row" style="margin-left: 5px; padding-bottom: 10px;" >
            <div class="col-md-10" >
                <span><strong style="font-size: 1.2em;">Let's discuss how we can help you.</strong></span>
            </div>
        </div>
        <div class="row" style="margin-left: 5px; padding-bottom: 40px;">
            <div class="col-md-10" >
                <span>We are very interested in contributing to your success. Your comments, suggestions, and questions will be most welcome. <br/>Please feel free to contact us at:</span>
            </div>
        </div>
        <div class="row" style="margin-left: 5px; padding-bottom: 5px;">
            <div class="col-md-10" >
                <strong style="font-size: 1.2em;">Our head office address:</strong>
            </div>
        </div>
        <div class="row" style="margin-left: 5px; padding-bottom: 20px;">
            <div class="col-md-10" >
                #486, 1st floor, 1st Cross, Ashwath Nagar, <br/>Marathahalli, Bangalore - 560037
            </div>
        </div>
        <div class="row" style="margin-left: 5px; padding-bottom: 5px;" >
            <div class="col-md-10" >
                <strong style="font-size: 1.2em;">Call us :</strong>
            </div>
        </div>
        <div class="row" style="margin-left: 5px; padding-bottom: 20px;">
            <div class="col-md-10" >
                080 48526352
            </div>
        </div>
        <div class="row" style="margin-left: 5px; padding-bottom: 5px;">
            <div class="col-md-10" >
                <strong style="font-size: 1.2em;">Mail us: </strong>
            </div>
        </div>
        <div class="row" style="margin-left: 5px; padding-bottom: 20px;">
            <div class="col-md-10" >
                info@uniquehire.in
            </div>
        </div>
        

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'project2-contactus'
      }
    };
  }
}

window.customElements.define('project2-contactus', Project2Contactus);