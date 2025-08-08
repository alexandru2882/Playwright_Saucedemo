import { test, expect } from '@playwright/test';

test('sort products by price low to high', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory.html/);

  //await page.getByRole('combobox', {name:'product_sort_container'}).selectOption({value:'lohi'});
  await page.getByTestId('product-sort-container').selectOption('lohi');
  const prices = await page.locator('.inventory_item_price').allTextContents();
  const numeric = prices.map(p => parseFloat(p.replace('$','')));
  const sorted = [...numeric].sort((a,b) => a - b);
  expect(numeric).toEqual(sorted);
});


