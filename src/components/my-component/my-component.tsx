import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  newAge: number = 20;

  render() {
    return <wc-component name="Juanma" surname="Molins" secondSurname="Cortés" age={this.newAge}></wc-component>;
  }
}
