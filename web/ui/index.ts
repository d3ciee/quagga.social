import Button from "./button";
import Input from "./input";
import Label from "./label";
import Logo from "./logo";
import Tabs,{TabTrigger,TabsHeader} from "./tabs/tabs";

export { Button, Input, Label, Logo,Tabs,TabsHeader,TabTrigger };

declare global {
    interface HTMLElementTagNameMap {
        "qg-button": Button;
        "qg-input":Input;
        "qg-label":Label;
        "qg-logo":Logo;
        "qg-tabs":Tabs;
        "qg-tabs-header":TabsHeader;
        "qg-tabs-trigger":TabTrigger;
    }
}

export class Button2 extends HTMLButtonElement{
    constructor(){
        super()
        this.innerText="hi"
    }
    connectedCallback(){
        
    }
}
customElements.define("button-2", Button2)