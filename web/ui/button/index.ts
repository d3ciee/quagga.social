import { html } from "lit";
import Element from "../_common/element";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { customElement, property } from "lit/decorators.js";
import prefixTagName from "../_helpers/prefix_tag_name";

const buttonVariants = cva(
  "inline-flex items-center justify-center border-b-4 active:border-b duration-75 active:translate-y-[2px] border-x whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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

@customElement(prefixTagName("button"))
class Button extends Element() {
  @property()
  variant: VariantProps<typeof buttonVariants>["variant"] = "default";
  @property()
  type: HTMLButtonElement["type"] = "button";
  @property()
  size: VariantProps<typeof buttonVariants>["size"];

  render() {
    return html`<button
      type=${this.type}
      style=${this.variant == "default"
        ? "background-image:var(--pattern-primary);background-size: cover"
        : ""}
      class="${twMerge(
        buttonVariants({
          variant: this.variant,
          size: this.size,
          className: this.className,
        })
      )}"
    >
      ${this.slotElements}
    </button>`;
  }
}

export default Button;
