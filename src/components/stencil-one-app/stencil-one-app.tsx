import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'stencil-one-app',
  styleUrl: 'stencil-one-app.css',
  shadow: true
})
export class StencilOneApp {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
