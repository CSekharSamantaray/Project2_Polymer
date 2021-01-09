import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import { setLegacyOptimizations, setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

/**
 * @customElement
 * @polymer
 * This component (container.js) is used as the main application page where we load all 
 * the individual pages. It also has the menu and app drawer. 
 */
class AppContainer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: #6f8e8390;
        }
        body{
          font-family: "Roboto", "Noto", sans-serif;
        }
        app-drawer-layout:not([narrow]) [drawer-toggle] {
          display: none;
        }
        .drawer-list {
          margin: 0 20px;
        }
        app-header {
          color: #000;
          background-color: #006b80;
        }
        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }
        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }
        .pagestyle{
          max-width: 800px;
        }
      </style>
      
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>
      
      <app-drawer-layout fullbleed="" narrow="{{narrow}}" >
      <!-- Drawer content -->
      <app-drawer id="drawer" slot="drawer" swipe-open="[[narrow]]">
        <app-toolbar style="background-color: #006b80;">Menu</app-toolbar>
        <iron-selector selected="[[page]]" attr-for-selected="name" class="drawer-list" role="navigation" style="background-color: #006b80;">
          <a name="app-hotels" href="[[rootPath]]app-hotels">Hotels</a>
          <a name="app-aviation" href="[[rootPath]]app-aviation">Aviation</a>
          <a name="app-rail" href="[[rootPath]]app-rail">Rail</a>
          <a name="app-aboutus" href="[[rootPath]]app-aboutus">About Us</a>
          <a name="app-contactus" href="[[rootPath]]app-contactus">Contact Us</a>
          <a name="app-login" href="[[rootPath]]app-login">Logout</a>
        </iron-selector>
      </app-drawer>

      <!-- Main content -->
      <app-header-layout has-scrolling-region="">

        <app-header slot="header" condenses="" reveals="" effects="waterfall" id="myheader" >
          <app-toolbar >
            <paper-icon-button icon="my-icons:menu" drawer-toggle=""></paper-icon-button>
            <div main-title="">TRAVEL AND TOURISM</div>
          </app-toolbar>
        </app-header>

        <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
          <app-hotels name="app-hotels" class="pagestyle"></app-hotels>
          <app-aviation name="app-aviation" class="pagestyle"></app-aviation>
          <app-rail name="app-rail" class="pagestyle"></app-rail>
          <app-aboutus name="app-aboutus" class="pagestyle"></app-aboutus>
          <app-contactus name="app-contactus" class="pagestyle"></app-contactus>
          <app-login name="app-login" class="pagestyle"></app-login>
        </iron-pages>
      </app-header-layout>
    </app-drawer-layout>
    `;
  }
  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: Object,
      subroute: Object
    };
  }

  //Observers declaration.
  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  //routePageChanged Observer function definition.
  _routePageChanged(page) {
    // Show the corresponding page according to the route.
    // If no page was found in the route data, page will be an empty string.
    // Show 'login' in that case. And if the page doesn't exist, show 'pageNotFoundError404'.
   let uname = sessionStorage.getItem('username');

   if (!page ) {
     this.page = 'app-login';
   } else if (['app-login', 'app-hotels', 'app-aviation','app-rail','app-aboutus','app-contactus'].indexOf(page) !== -1) {
     this.page = page;
   } 
    
   // Close a non-persistent drawer when the page & route are changed.
   if (!this.$.drawer.persistent) {
     this.$.drawer.close();
   }
 }

 _pageChanged(page) {
  // Import the page component on demand.
  // Note: `polymer build` doesn't like string concatenation in the import
  // statement, so break it up.
  this.$.drawer.style.display  = 'block';
  this.$.myheader.style.display  = 'block';

  switch (page) {
    case 'app-login':
      this.$.drawer.style.display = 'none';
      this.$.myheader.style.display  = 'none';
      import('./login.js');
      break;
    case 'app-hotels':
      import('./hotels.js');
      break;
    case 'app-aviation':
      import('./aviation.js');
      break;
    case 'app-rail':
      import('./rail.js');
      break;
    case 'app-aboutus':
      import('./aboutus.js');
      break;
    case 'app-contactus':
      import('./contactus.js');
      break;
  }
}
}

//Finally register the current component to the browser.
window.customElements.define('app-container', AppContainer);