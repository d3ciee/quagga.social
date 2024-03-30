import { CSSResultGroup, LitElement, unsafeCSS } from "lit";
//@ts-ignore
import style from "../../../dist/css/styles.css?inline";
import { property } from "lit/decorators.js";

class El extends LitElement {
    
        @property()
        innerClass:string | undefined = undefined

    static styles?: CSSResultGroup | undefined = unsafeCSS(style);
  };

  const Element = () => El

export default Element;
