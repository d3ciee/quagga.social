import { html } from "lit";
import Element from "../_common/element";
import { customElement, property } from "lit/decorators.js";
import prefixTagName from "../_helpers/prefix_tag_name";

@customElement(prefixTagName("logo"))
class Logo extends Element() {
  @property()
  size: "full" | "icon" = "icon";

  render() {
    return html`<div
      style="background-image:var(--pattern-primary);background-size: cover"
      class="h-14 w-14 rounded-md bg-primary"
    ></div>`;
  }
}

export default Logo;
