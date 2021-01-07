import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

/**
 * @customElement
 * @polymer
 */
class Project2Element extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <paper-input always-float-label label="Enter Username"></paper-input>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'project2-element'
      }
    };
  }
}

window.customElements.define('project2-element', Project2Element);
