import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
// import {classMap} from 'lit/directives/class-map.js';
// import {styleMap} from 'lit/directives/style-map.js';
// import {selectors} from '@defencedigital/design-tokens';

// const {color} = selectors;

/**
 * A `input` element.
 *
 */
@customElement('input-element')
export class Input extends LitElement {
  static override styles = css`
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

  @property() // `@internalProperty` decorator missing from exports? :(
  private _input = {};

  @property({type: String})
  value = '';

  @property({type: String})
  placeHolder = '';

  override render() {
    return html`
      <input
        type="text"
        placeholder="${this.placeHolder}"
        @keyup="${this._onKeyUp}"
        @blur="${this._onBlur}"
      />
    `;
  }

  override firstUpdated() {
    // Save input reference for performance
    this._input = this?.shadowRoot?.querySelector('input') as Object;
  }

  private _onKeyUp(_event: KeyboardEvent) {
    this.dispatchEvent(
      new CustomEvent('key-pressed', {
        detail: {
          value: (this._input as HTMLInputElement).value,
        },
        composed: true,
        bubbles: true,
      })
    );
  }

  private _onBlur(_event: Event) {
    this.dispatchEvent(
      new CustomEvent('focus-lost', {
        detail: {
          value: (this._input as HTMLInputElement).value,
        },
        composed: true,
        bubbles: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'input-element': Input;
  }
}
