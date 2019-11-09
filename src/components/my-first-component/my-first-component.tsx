import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-first-component',
  shadow: false
})
export class MyComponent {

  // Indicate that name should be a public property on the component
  @Prop() name: string;

  render() {
    return (
      <p class="f2 red">
        Hello {this.name}
      </p>
    );
  }
}