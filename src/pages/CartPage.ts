import { Page, Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.getByRole('button', { name: /checkout/i });
  }

  async goto(): Promise<void> {
    await this.page.getByRole('link', { name: /cart/i }).click();
  }
}


