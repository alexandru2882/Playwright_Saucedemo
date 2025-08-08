import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly items: Locator;
  readonly sortSelect: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.items = page.locator('.inventory_item');
    this.sortSelect = page.locator('[data-test="product_sort_container"]');
    this.cartLink = page.getByRole('link', { name: /cart/i });
  }

  async addFirstItemToCart(): Promise<void> {
    await this.items.first().getByRole('button', { name: /add to cart/i }).click();
  }
}


