import { newSpecPage } from '@stencil/core/testing';
import { WcComponent } from '../wc-component';

describe('wc-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcComponent],
      html: `<wc-component></wc-component>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-component>
    `);
  });
});
