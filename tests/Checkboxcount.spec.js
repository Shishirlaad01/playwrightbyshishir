const { test, expect } = require('@playwright/test');

test('checkbox count', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');

  const checkboxes = page.getByRole('checkbox');
  await expect(checkboxes.first()).toBeVisible();   // wait until they load

  const count = await checkboxes.count();
  console.log(count);
});