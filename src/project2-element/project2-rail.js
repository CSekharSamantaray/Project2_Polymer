import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';



/**
 * @customElement
 * @polymer
 */
class Project2Rail extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
            display: block;
            }
        </style>
      
        <app-header reveals>
            <app-toolbar>
                <div main-title>RAILWAYS</div>
            </app-toolbar>
        </app-header>
        
        <div style="padding-bottom: 20px;">
            <form >
                <div>
                    <label for="txtfrom">From</label><br>
                    <input type="text" id="txtfrom" name="txtfrom" value="" style="max-width: 120px;" class="formcontrols" required >
                </div>
                <div>
                    <label for="txtto">To</label><br>
                    <input type="text" id="txtto" name="txtto" value="" style="max-width: 120px;" class="formcontrols" required>
                </div>
                <div>
                    <label for="journeydate">Journey Date</label><br>
                    <input type="date" id="journeydate" style="max-width: 130px;" name="journeydate" value="" min="2020-12-01" max="2021-12-31" class="formcontrols" required>
                </div>
                <div>
                    <label for="txtnoofpassengers">No of Travellers</label><br>
                    <input style="max-width: 120px;" id="txtnoofpassengers" onkeydown="" type="number" min="1" max="10" class="formcontrols" required>
                </div>
                <div style="padding-top: 25px;">
                    <input type="submit" value="Search Trains" style="color: black;"></button>
                </div>
            </form> 
        </div>

    

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'project2-rail'
      }
    };
  }
}

window.customElements.define('project2-rail', Project2Rail);