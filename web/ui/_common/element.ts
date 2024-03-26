import { CSSResultGroup, LitElement, unsafeCSS } from "lit";
//@ts-ignore
import style from "../../../dist/css/styles.css?inline";

const Element = () =>
  class extends LitElement {
    elementChildren: Array<ChildNode> = [];
    slotContents: any;

    connectedCallback() {
        this.elementChildren = Array.from(this.childNodes);
        super.connectedCallback();
    }

    createRenderRoot() {
        return this;
    }
    get slotElements(): ChildNode[] {
        return this.elementChildren;
    }


    static styles?: CSSResultGroup | undefined = unsafeCSS(style);
  };

export default Element;
