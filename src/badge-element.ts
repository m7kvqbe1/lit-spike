import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {classMap} from 'lit/directives/class-map.js';
import {selectors} from '@defencedigital/design-tokens';

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

const {color} = selectors;

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
      vertical-align: middle;
      white-space: nowrap;
      color: white;
      padding: 1rem 1.5rem;

      font-size: 12px;
    }

    :host(.variant--pill) {
      border-radius: 100px;
    }

    :host(.variant--regular) {
      border-radius: 2px;
    }
  `;

  @property({type: String})
  color = BADGE_COLOR.NEUTRAL;

  @property({type: String})
  variant = BADGE_VARIANT.REGULAR;

  override render() {
    return html`
      <span
        style=${styleMap({'background-color': color(this.color, '500')})}
        class=${classMap({[`variant--${this.variant}`]: !!this.variant})}
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
