import { html } from "lit";
import Element from "../_common/element";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { customElement, property } from "lit/decorators.js";
import prefixTagName from "../_helpers/prefix_tag_name";


@customElement(prefixTagName("tab-trigger"))
class TabTrigger extends Element(){
    @property() name?: string 

    render(){
        return html`
            <button data-tab-trigger-name=${this.name} class="hover:bg-accent hover:text-accent-foreground w-full h-full flex-1">
                <slot/>
            </button>
        `
    }
}

@customElement(prefixTagName("tabs-header"))
class TabsHeader extends Element(){
    render() {
        return html`
        <div id="tabs-header" class="h-12 w-full flex">
          <slot/>
        </div>
        `
    }
}

@customElement(prefixTagName("tabs"))
class Tabs extends Element() {
  tagTriggers:string[] = [];
 

  getTriggers(){
    console.log(this.children.namedItem("tabs-header"))
    Array.from(this.children).forEach(e=>e.getAttribute("data-tab-trigger-name"))
    }

  render() {
    this.getTriggers()
    return html`<div class="w-full"><slot/></div>`;
  }
}


export default Tabs;
export {TabsHeader,TabTrigger}
