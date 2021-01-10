import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import './shared-styles.js';



/**
 * @customElement
 * @polymer
 * This component (aboutus.js) is used as a page in the application for displaying the About Us.
 */
class AppAboutus extends PolymerElement {
  static get template() {
    return html`
        <style include="shared-styles">
            :host {
              display: block;
            }

        </style>

        <app-header reveals>
            <app-toolbar>
                <div main-title>ABOUT US</div>
            </app-toolbar>
        </app-header>
        
        <div class="div_searchForm" gap="10px">
            <span class="searchtitle">Vision and Mission</span><br/>
            <hr>
            <span>The main purpose of your About Us page is to give your visitors a glimpse into who you are as a person or a business (or sometimes both).
            As users discover your brand, they need to distinguish what sets you apart and makes you… you. This often requires finding the right 
            balance between compelling content and a design carefully planned to look the part. Conveying your identity in a fun and approachable – 
            but also reliable and informative way is challenging. If you know who you are and your goal for your site, the About Us page should 
            come naturally.</span>
        </div>
        
        <div class="div_searchForm" gap="10px">
            <span class="searchtitle">Team Member Profiles</span><br/>
            <hr>
            <span>Add an emotional element to your About Us page by adding details of the people that are driving the passion at your business. People find it 
            easier to connect with human beings, so allow the personality of your crew to shine through the About Us page.The New York Times shares a 
            lot of information on their About Us page and this includes numbers relating to their staff and readership. It is important for them to 
            emphasise to readers all around the world that they have a large team of journalists who write stories about countries they are local to. 
            The fact that the publication had 4.3 million subscribers in quarter 4 of 2018 only adds to the trust they have, leading to more readers 
            in the future.</span>
        </div>

    `;
  }

}

//Finally register the current component to the browser.
window.customElements.define('app-aboutus', AppAboutus);