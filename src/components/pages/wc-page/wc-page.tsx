import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-page',
  styleUrl: 'wc-page.css',
  shadow: true,
})
export class WcPage {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
