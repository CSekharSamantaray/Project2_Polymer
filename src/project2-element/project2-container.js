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

setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

/**
 * @customElement
 * @polymer
 */
class Project2Container extends PolymerElement {
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
          <a name="project2-hotels" href="[[rootPath]]project2-hotels">Hotels</a>
          <a name="project2-aviation" href="[[rootPath]]project2-aviation">Aviation</a>
          <a name="project2-rail" href="[[rootPath]]project2-rail">Rail</a>
          <a name="project2-aboutus" href="[[rootPath]]project2-aboutus">About Us</a>
          <a name="project2-contactus" href="[[rootPath]]project2-contactus">Contact Us</a>
          <a name="project2-login" href="[[rootPath]]project2-login">Logout</a>
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
          <project2-hotels name="project2-hotels"></project2-hotels>
          <project2-aviation name="project2-aviation"></project2-aviation>
          <project2-rail name="project2-rail"></project2-rail>
          <project2-aboutus name="project2-aboutus"></project2-aboutus>
          <project2-contactus name="project2-contactus"></project2-contactus>
          <project2-login name="project2-login"></project2-login>
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

  static get observers() {
    return [
      '_routePageChanged(routeData.page)'
    ];
  }

  _routePageChanged(page) {
    // Show the corresponding page according to the route.
    //
    // If no page was found in the route data, page will be an empty string.
    // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
   let uname = sessionStorage.getItem('username');

   if (!page ) {  //|| !uname
     this.page = 'project2-login';
   } else if (['project2-login', 'project2-hotels', 'project2-aviation','project2-rail','project2-aboutus','project2-contactus'].indexOf(page) !== -1) {
     this.page = page;
   } 
    

   // Close a non-persistent drawer when the page & route are changed.
   if (!this.$.drawer.persistent) {
     this.$.drawer.close();
   }
 }

 _pageChanged(page) {
  // Import the page component on demand.
  //
  // Note: `polymer build` doesn't like string concatenation in the import
  // statement, so break it up.
  this.$.drawer.style.display  = 'block';
  this.$.myheader.style.display  = 'block';

  switch (page) {
    case 'project2-login':
      import('./project2-login.js');
      this.$.drawer.style.display = 'none';
      this.$.myheader.style.display  = 'none';
      break;
    case 'project2-hotels':
      import('./project2-hotels.js');
      break;
    case 'project2-aviation':
      import('./project2-aviation.js');
      break;
    case 'project2-rail':
      import('./project2-rail.js');
      break;
    case 'project2-aboutus':
      import('./project2-aboutus.js');
      break;
    case 'project2-contactus':
      import('./project2-contactus.js');
      break;
  }
}
}

window.customElements.define('project2-container', Project2Container);