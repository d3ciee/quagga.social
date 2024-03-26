import { twMerge } from "tailwind-merge";
import Element from "../_common/element";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import prefixTagName from "../_helpers/prefix_tag_name";
import { ifDefined } from "lit/directives/if-defined.js";

@customElement(prefixTagName("input"))
class Input extends Element() {
  @property()
  type: HTMLInputElement["type"] = "text";
  @property()
  name: string | undefined = undefined;
  @property()
  placeholder: string | undefined = undefined;
  @property()
  required: boolean = false;

  render() {
    return html`<input
      type=${this.type as any}
      ?required=${this.required}
      placeholder=${ifDefined(this.placeholder)}
      name=${ifDefined(this.name)}
      id=${this.id}
      class="${twMerge(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        this.className
      )}"
    /> `;
  }
}

export default Input;
