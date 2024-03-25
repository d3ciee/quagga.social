import { html, css } from "lit";

import { property } from "lit/decorators.js";
import Element from "./_shared/element";
import customElement from "./_decorators/custom_element";
import Button from "./button";

@customElement("simple-greeting")
export class SimpleGreeting extends Element() {
  @property()
  name = "Somebody";

  render() {
    return html`<p class="bg-green-500">Helolkl, ${this.name}!</p>`;
  }
}

export { Button };
