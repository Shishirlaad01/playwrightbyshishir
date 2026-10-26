const { test, expect } = require('@playwright/test');

test('array test', async ({ page }) => {
  await page.goto('https://www.google.com/');

  const searchBox = page.getByRole('combobox', { name: 'Search' });
  await searchBox.fill('mukesh otwani');

  const suggestions = page.getByRole('option');   // autocomplete items
  await expect(suggestions.first()).toBeVisible();

  const count = await suggestions.count();
  for (let i = 0; i < count; i++) {
    const text = await suggestions.nth(i).textContent();
    if (text && text.toLowerCase().includes('youtube')) {
      await suggestions.nth(i).click();
      break;                                     // page navigates; stop looping
    }
  }
});

