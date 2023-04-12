import { newE2EPage } from '@stencil/core/testing';

describe('wc-component2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-component2></wc-component2>');

    const element = await page.find('wc-component2');
    expect(element).toHaveClass('hydrated');
  });
});
