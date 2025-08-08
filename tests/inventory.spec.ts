import { test, expect } from '@playwright/test';

test('inventory page lists products', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL(/inventory.html/);
  const count = await page.getByTestId('inventory-item').count();
  expect(count).toBeGreaterThan(0);
});


