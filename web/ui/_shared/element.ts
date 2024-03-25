import { CSSResultGroup, LitElement, unsafeCSS } from "lit";
import style from "../../../dist/css/tailwind.css?inline";

const Element = () =>
  class extends LitElement {
    static styles?: CSSResultGroup | undefined = unsafeCSS(style);
  };

export default Element;
