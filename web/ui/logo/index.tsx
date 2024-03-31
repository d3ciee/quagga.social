import { Component, Prop, h } from "@stencil/core";

@Component({
tag:  "qg-logo",
shadow:false
})
export class Logo {
  @Prop() class?:string;
  @Prop()
  size: "full" | "icon" = "icon";

  render() {
    return <div
      style={{backgroundImage:"var(--pattern-primary);background-size: cover"}}
      class="h-14 w-14 rounded-md bg-primary"
    ></div>;
  }
}
