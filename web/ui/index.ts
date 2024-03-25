import { html, css } from "lit";

import { customElement, property } from "lit/decorators.js";
import Element from "./_shared/element";

@customElement("simple-greeting")
export class SimpleGreeting extends Element() {
  @property()
  name = "Somebody";

  render() {
    return html`<p class="bg-green-500">Helolkl, ${this.name}!</p>`;
  }
}
