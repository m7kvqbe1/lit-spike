import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {classMap} from 'lit/directives/class-map.js';
// import {styleMap} from 'lit/directives/style-map.js';
// import {selectors} from '@defencedigital/design-tokens';

const BADGE_COLOR = {
  ACTION: 'action',
  DANGER: 'danger',
  NEUTRAL: 'neutral',
  SUCCESS: 'success',
  WARNING: 'warning',
  SUPA: 'supa',
  SUPB: 'supb',
  SUPC: 'supc',
  SUPD: 'supd',
  SUPE: 'supe',
  SUPF: 'supf',
} as const;

const BADGE_VARIANT = {
  PILL: 'pill',
  REGULAR: 'regular',
} as const;

// const {color} = selectors;

/**
 * A `badge` element.
 *
 * @slot - This element has a slot
 */
@customElement('badge-element')
export class Badge extends LitElement {
  static override styles = css`
    :host {
      display: inline-block;
      font-family: Arial, Helvetica, sans-serif;
    }

    span {
      vertical-align: middle;
      white-space: nowrap;
      color: inherit;
      padding: 0.5rem 0.75rem;
      border-radius: 2px;
      font-size: 12px;
      font-weight: 700;
    }

    .variant--pill {
      border-radius: 100px;
    }

    .color--action {
      background-color: rgb(221, 244, 255);
      color: rgb(38, 97, 167);
    }

    .color--success {
      background-color: rgb(229, 255, 217);
      color: rgb(59, 111, 51);
    }

    .color--warning {
      background-color: rgb(255, 255, 238);
      color: rgb(140, 79, 23);
    }
  `;

  @property({type: String})
  color = BADGE_COLOR.ACTION;

  @property({type: String})
  variant = BADGE_VARIANT.REGULAR;

  override render() {
    return html`
      <span
        class=${classMap({
          [`variant--${this.variant}`]: !!this.variant,
          [`color--${this.color}`]: !!this.color,
        })}
      >
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'badge-element': Badge;
  }
}
