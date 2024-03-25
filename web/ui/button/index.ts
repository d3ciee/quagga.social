import { html } from "lit";
// import customElement from "../_decorators/custom_element";
import Element from "../_shared/element";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { property, customElement } from "lit/decorators.js";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
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

@customElement("qg-button")
class Button extends Element() {
  @property()
  variant: VariantProps<typeof buttonVariants>["variant"];

  @property()
  size: VariantProps<typeof buttonVariants>["size"];

  render() {
    return html`<button
      class="${twMerge(
        buttonVariants({
          variant: this.variant,
          size: this.size,
          className: this.className,
        })
      )}"
    >
      yaris to urus ${this.children}
    </button>`;
  }
}

export default Button;