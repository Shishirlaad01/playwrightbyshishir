const {test, expect} = require('@playwright/test');
test("mouse hover", async ({ page }) => {
await page.goto("https://www.ebay.com/");
await page.waitForTimeout(200);
await page.locator('span:has-text("Motors")').hover();
await page.waitForTimeout(200);
await page.getByRole('link', { name: 'Cars and trucks' }).click();
await page.waitForURL("https://www.ebay.com/b/Cars-Trucks/6001/bn_1865117");
await page.waitForTimeout(200);

await expect(page).toHaveURL("https://www.ebay.com/b/Cars-Trucks/6001/bn_1865117");

});