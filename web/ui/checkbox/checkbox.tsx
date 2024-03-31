import { Component, Prop, h } from "@stencil/core";
import { twMerge } from "tailwind-merge";

@Component({
tag:  "qg-checkbox",
shadow:false
})
export class Checkbox {
  @Prop() className:string;
  @Prop() id:string;

  render() {
    return (
        <input 
            required
            id={this.id}
            type="checkbox"
            class={twMerge(
                "peer w-4 h-4 text-primary bg-transparent border rounded focus:ring-primary dark:focus:ring-primary focus:ring-2dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600",
                this.className
            )}
        />
    );
  }
}
