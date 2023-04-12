import { newE2EPage } from '@stencil/core/testing';

describe('wc-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-page></wc-page>');

    const element = await page.find('wc-page');
    expect(element).toHaveClass('hydrated');
  });
});
