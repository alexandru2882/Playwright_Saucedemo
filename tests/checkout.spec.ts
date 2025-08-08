import { test, expect } from '@playwright/test';

test('user can checkout a single item', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL(/inventory.html/);
  // Add first item using data-test specific button
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
  // Open cart using data-test on container/link
  await page.getByTestId('shopping-cart-link').click();
  await page.getByTestId('checkout').click();
  await page.getByTestId('firstName').fill('John');
  await page.getByTestId('lastName').fill('Doe');
  await page.getByTestId('postalCode').fill('12345');
  await page.getByTestId('continue').click();
  await page.getByTestId('finish').click();
  await expect(page.getByTestId('complete-header')).toBeVisible();
});


