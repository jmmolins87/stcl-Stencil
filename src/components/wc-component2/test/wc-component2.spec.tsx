import { newSpecPage } from '@stencil/core/testing';
import { WcComponent2 } from '../wc-component2';

describe('wc-component2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcComponent2],
      html: `<wc-component2></wc-component2>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-component2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-component2>
    `);
  });
});
