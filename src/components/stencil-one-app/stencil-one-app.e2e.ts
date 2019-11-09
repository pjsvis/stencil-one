import { newE2EPage } from '@stencil/core/testing';

describe('stencil-one-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<stencil-one-app></stencil-one-app>');

    const element = await page.find('stencil-one-app');
    expect(element).toHaveClass('hydrated');
  });
});
