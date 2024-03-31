import { twMerge } from "tailwind-merge";
import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "qg-input",
  shadow: false,
})
export class Input{
  @Prop() 
  className:string;
  @Prop()
  type: HTMLInputElement["type"] = "text";
  @Prop()
  name: string;
  @Prop()
  placeholder: string;
  @Prop()
  required: boolean = true;
  @Prop()
  description:string = "";
  @Prop()
  error:string=""
  @Prop()
  min:number
  @Prop()
  max:number
  @Prop()
  pattern:string

  render() {
    return (
      <div class="w-full space-y-1">
        <input
          autoComplete="off"
          type={this.type as any}
          required
          placeholder={this.placeholder}
          minLength={this.min}
          pattern={this.pattern}
          maxlength={this.max}
          name={this.name}
          class={twMerge(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "invalid:[&:not(:placeholder-shown):not(:focus)]:border-destructive peer",
            "valid:[&:not(:placeholder-shown):not(:focus)]:border-success",
            this.className
          )}
        />
        {
        this.description && 
          <span 
            class="text-xs ml-2 text-secondary-foreground italic peer-[&:not(:placeholder-shown):not(:focus):invalid]:hidden"
          >
          {this.description}
        </span>
        }
        {
           this.error && 
           <span 
             class="text-xs ml-2 text-destructive hidden peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
           >

           {this.error}
         </span>
        }
      </div>
      );
  }
}

