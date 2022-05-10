import { LitElement } from 'lit';
/**
 * A `input` element.
 *
 */
export declare class Input extends LitElement {
    static styles: import("lit").CSSResult;
    _input: {};
    value: string;
    placeHolder: string;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
    _onKeyUp(_event: KeyboardEvent): void;
    _onBlur(_event: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'input-element': Input;
    }
}
//# sourceMappingURL=input-element.d.ts.map