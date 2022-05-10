var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
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
};
const BADGE_VARIANT = {
    PILL: 'pill',
    REGULAR: 'regular',
};
// const {color} = selectors;
/**
 * A `badge` element.
 *
 * @slot - This element has a slot
 */
let Badge = class Badge extends LitElement {
    constructor() {
        super(...arguments);
        this.color = BADGE_COLOR.ACTION;
        this.variant = BADGE_VARIANT.REGULAR;
    }
    render() {
        return html `
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
};
Badge.styles = css `
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
__decorate([
    property({ type: String })
], Badge.prototype, "color", void 0);
__decorate([
    property({ type: String })
], Badge.prototype, "variant", void 0);
Badge = __decorate([
    customElement('badge-element')
], Badge);
export { Badge };
//# sourceMappingURL=badge-element.js.map