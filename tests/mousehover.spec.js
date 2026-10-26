const {test, expect} = require('@playwright/test');
// eBay blocks headless/automated browsers (HTTP 403), so this uses a practice site built for automation
test("mouse hover", async ({ page }) => {
await page.goto("https://the-internet.herokuapp.com/hovers");
const firstUser = page.locator('.figure').first();
await firstUser.hover();
await expect(firstUser.getByText('name: user1')).toBeVisible();
await firstUser.getByRole('link', { name: 'View profile' }).click();

await expect(page).toHaveURL("https://the-internet.herokuapp.com/users/1");

});
