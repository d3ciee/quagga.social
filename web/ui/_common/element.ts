import { CSSResultGroup, LitElement, unsafeCSS } from "lit";
//@ts-ignore
import style from "../../../dist/css/styles.css?inline";

const Element = () =>
  class extends LitElement {
    static styles?: CSSResultGroup | undefined = unsafeCSS(style);
  };

export default Element;
