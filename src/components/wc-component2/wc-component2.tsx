import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-component2',
  styleUrl: 'wc-component2.css',
  shadow: true,
})
export class WcComponent2 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
