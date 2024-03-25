import { customElement as litCustomElement } from "lit/decorators.js";

const TAG_PREFIX = "qg-";

const customElement = (tagname: string) =>
  litCustomElement(TAG_PREFIX + tagname);
export default customElement;
