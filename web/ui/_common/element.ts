import {  LitElement } from "lit";
//@ts-ignore
import { property } from "lit/decorators.js";

class El extends LitElement {
    
        @property()
        innerClass:string | undefined = undefined


  };

  const Element = () => El

export default Element;
