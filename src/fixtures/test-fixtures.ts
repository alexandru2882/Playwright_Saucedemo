import { test as base } from '@playwright/test';

type Fixtures = {
  loginAsStandardUser: () => Promise<void>;
};

export const test = base.extend<Fixtures>({
  loginAsStandardUser: async ({ page }, use) => {
    await use(async () => {
      await page.goto('https://www.saucedemo.com/');
      await page.getByPlaceholder('Username').fill(process.env.SAUCE_USERNAME ?? 'standard_user');
      await page.getByPlaceholder('Password').fill(process.env.SAUCE_PASSWORD ?? 'secret_sauce');
      await page.getByRole('button', { name: 'Login' }).click();
    });
  },
});

export { expect } from '@playwright/test';


