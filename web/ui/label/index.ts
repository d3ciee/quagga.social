import { twMerge } from "tailwind-merge";
import Element from "../_common/element";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import prefixTagName from "../_helpers/prefix_tag_name";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(prefixTagName("label"))
class Input extends Element() {
  @property()
  for: string | undefined = undefined;

  render() {
    return html`<label
      for=${ifDefined(this.for)}
      id=${this.id}
      class="${twMerge(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        this.className
      )}"
    >
      <slot></slot>
    </label>`;
  }
}

export default Input;
