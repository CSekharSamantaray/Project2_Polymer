import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 * This component (pagenotfound.js) is used as a landing page when the user 
 * gives an invallid page address or there is some error.
 */
class PageNotFound extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>

        <span>Opps you are trying to visit a page that is not available.</span><br/>
        <span><a href="[[rootPath]]">Go back to home.</a></span>
    `;
  }
}

//Finally register the current component to the browser.
window.customElements.define('pageNotFound', PageNotFound);