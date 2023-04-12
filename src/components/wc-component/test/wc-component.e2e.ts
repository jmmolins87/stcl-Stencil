import { newE2EPage } from '@stencil/core/testing';

describe('wc-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-component></wc-component>');

    const element = await page.find('wc-component');
    expect(element).toHaveClass('hydrated');
  });
});
