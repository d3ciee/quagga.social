import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  shadow: false,
})
export class MyComponent {
  @Prop() first?: string;
  @Prop() middle?: string;
  @Prop() last?: string;

  render() {
    return <div>Hello, World! I'm <slot/></div>;
  }
}
