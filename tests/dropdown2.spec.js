const { test, expect } = require('@playwright/test');
test('dropdown test', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await page.getByRole('textbox', { name: /Name/i }).fill('John Doe');
    await page.getByRole('textbox', { name: /Email/i }).fill('shishirlaad@gmail.com');
    await page.locator('#password').fill('123456');
    await page.locator('.interests-div input[type="checkbox"]').first().check();
    await page.locator("//div[@class='interests-div']//div[2]").click();
    await page.locator('div.interests-div').locator('div').nth(5).click();
    await page.locator("//input[@id='gender2']").click();

    const state = page.locator("//select[@id='state']");
    const stateOptions = await state.locator('option').all();

    for (let i = 0; i < stateOptions.length; i++) {
        const value = await stateOptions[i].textContent();
        console.log(`Option ${i + 1}: ${value}`);
    }
});