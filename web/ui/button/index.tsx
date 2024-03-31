import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "qg-button",
  shadow: false,
})
export class Button {
  @Prop() className:string;
  @Prop() id:string
  @Prop() variant:any = "default";
  @Prop() type: HTMLButtonElement["type"] = "button";
  @Prop()
  size: any;
  @Prop()
  disabled: boolean = false;


  
  render() {
    return <button
      type={this.type}
      id={this.id}
      disabled={this.disabled}
      style={this.variant == "default"
        ? {backgroundImage:"var(--pattern-primary)",
          backgroundSize:"cover"
      }
        : {}}
      class={twMerge(
        buttonVariants({
          variant: this.variant,
          size: this.size,
        }),this.className
      )}
    >
         <slot/>
    </button>;
  }
}

const buttonVariants = cva(
  "inline-flex w-full items-center justify-center border-b-4 active:border-b duration-75 active:translate-y-[2px] border-x whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "shadow-sm transition-shadow hover:shadow-md bg-primary border-[#563211] active:shadow-none text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

