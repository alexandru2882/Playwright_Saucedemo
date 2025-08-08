import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('can login with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByTestId('username').fill(process.env.SAUCE_USERNAME ?? 'standard_user');
    await page.getByTestId('password').fill(process.env.SAUCE_PASSWORD ?? 'secret_sauce');
    await page.getByTestId('login-button').click();
    await expect(page).toHaveURL(/inventory.html/);
  });
});


