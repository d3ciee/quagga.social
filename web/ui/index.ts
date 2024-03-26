import Button from "./button";
import Input from "./input";
import Label from "./label";
import Logo from "./logo";

export { Button, Input, Label, Logo };

declare global {
    interface HTMLElementTagNameMap {
        "qg-button": Button;
        "qg-input":Input;
        "qg-label":Label;
        "qg-logo":Logo
    }
}
