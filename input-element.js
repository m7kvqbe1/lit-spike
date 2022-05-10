var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
// import {classMap} from 'lit/directives/class-map.js';
// import {styleMap} from 'lit/directives/style-map.js';
// import {selectors} from '@defencedigital/design-tokens';
// const {color} = selectors;
/**
 * A `input` element.
 *
 */
let Input = class Input extends LitElement {
    constructor() {
        super(...arguments);
        this._input = {};
        this.value = '';
        this.placeHolder = '';
    }
    render() {
        return html `
      <input
        type="text"
        placeholder="${this.placeHolder}"
        @keyup="${this._onKeyUp}"
        @blur="${this._onBlur}"
      />
    `;
    }
    firstUpdated() {
        var _a;
        // Save input reference for performance
        this._input = (_a = this === null || this === void 0 ? void 0 : this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('input');
    }
    _onKeyUp(_event) {
        this.dispatchEvent(new CustomEvent('key-pressed', {
            detail: {
                value: this._input.value,
            },
            composed: true,
            bubbles: true,
        }));
    }
    _onBlur(_event) {
        this.dispatchEvent(new CustomEvent('focus-lost', {
            detail: {
                value: this._input.value,
            },
            composed: true,
            bubbles: true,
        }));
    }
};
Input.styles = css `
    * {
      box-sizing: border-box;
    }

    :host {
      display: inline-block;
      position: relative;
      font-family: Arial, Helvetica, sans-serif;
    }

    input {
      width: var(--input-width, 250px);
      height: var(--input-height, 30px);
      padding: 5px;
      border: 1px solid rgb(184, 199, 210);
      background-color: white;
      font-size: var(--input-font-size, calc(var(--input-height) / 1.8));
      color: inherit;
      border-radius: 12px;
    }

    input:focus {
      border: 1px solid rgb(58, 143, 221);
      box-shadow: rgb(221, 244, 255) 0px 0px 0px 6px;
    }

    :host([text-right]) > input {
      text-align: right;
    }
    :host([text-left]) > input {
      text-align: left;
    }

    ::-ms-input-placeholder,
    :-ms-input-placeholder,
    ::placeholder {
      color: #a0a0a0;
    }
  `;
__decorate([
    property() // `@internalProperty` decorator missing from exports? :(
], Input.prototype, "_input", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "value", void 0);
__decorate([
    property({ type: String })
], Input.prototype, "placeHolder", void 0);
Input = __decorate([
    customElement('input-element')
], Input);
export { Input };
//# sourceMappingURL=input-element.js.map