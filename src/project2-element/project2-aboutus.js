import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';



/**
 * @customElement
 * @polymer
 */
class Project2Aboutus extends PolymerElement {
  static get template() {
    return html`
        <style>
            :host {
            display: block;
            }
        </style>

        <app-header reveals>
            <app-toolbar>
                <div main-title>ABOUT US</div>
            </app-toolbar>
        </app-header>
        
        <div style="margin-left: 5px; padding-bottom: 10px;">
            <div>
                <span><strong style="font-size: 1.2em;">Vision and Mission</strong></span>
            </div>
        </div>
        <div style="margin-left: 5px; padding-bottom: 40px;">
            <div>
                <span>The main purpose of your About Us page is to give your visitors a glimpse into who you are as a person or a business (or sometimes both).
                    As users discover your brand, they need to distinguish what sets you apart and makes you… you. This often requires finding the right 
                    balance between compelling content and a design carefully planned to look the part. Conveying your identity in a fun and approachable – 
                    but also reliable and informative way is challenging. If you know who you are and your goal for your site, the About Us page should 
                    come naturally.
                </span>
            </div>
        </div>
        <div style="margin-left: 5px; padding-bottom: 10px;">
            <div>
                <span><strong style="font-size: 1.2em;">Team Member Profiles</strong></span>
            </div>
        </div>
        <div style="margin-left: 5px; padding-bottom: 40px;">
            <div>
                <span>
                    Add an emotional element to your About Us page by adding details of the people that are driving the passion at your business. People find it 
                    easier to connect with human beings, so allow the personality of your crew to shine through the About Us page.The New York Times shares a 
                    lot of information on their About Us page and this includes numbers relating to their staff and readership. It is important for them to 
                    emphasise to readers all around the world that they have a large team of journalists who write stories about countries they are local to. 
                    The fact that the publication had 4.3 million subscribers in quarter 4 of 2018 only adds to the trust they have, leading to more readers 
                    in the future.
                </span>
            </div>
        </div>
        

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'project2-aboutus'
      }
    };
  }
}

window.customElements.define('project2-aboutus', Project2Aboutus);