import { Page, Locator, expect } from '@playwright/test';

export class CheckoutOverviewPage {
  readonly page: Page;
  readonly finishButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.finishButton = page.getByRole('button', { name: /finish/i });
  }

  async finish(): Promise<void> {
    await this.finishButton.click();
    await expect(this.page.getByText(/thank you for your order/i)).toBeVisible();
  }
}


