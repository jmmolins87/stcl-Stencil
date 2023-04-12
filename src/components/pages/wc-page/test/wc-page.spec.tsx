import { newSpecPage } from '@stencil/core/testing';
import { WcPage } from '../wc-page';

describe('wc-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcPage],
      html: `<wc-page></wc-page>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-page>
    `);
  });
});
