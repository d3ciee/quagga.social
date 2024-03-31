import { twMerge } from "tailwind-merge";
import { Component, Prop, h } from "@stencil/core";

@Component({
  tag:"qg-label", 
  shadow:false,
})
export class Input {
  @Prop() class:string ;
  @Prop()
  for?: string;

  render() {
    return <label
      htmlFor={this.for}
      class={twMerge(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        this.class
      )}
    >
      <slot/>
    </label>;
  }
}

