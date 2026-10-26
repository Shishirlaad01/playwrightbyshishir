const { test, expect } = require('@playwright/test');

test('dropdown test', async ({ page }) => {
    
    //Signup

    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    await page.getByRole('textbox', { name: /Name/i }).fill('John Doe');
    // Unique email each run, otherwise signup fails on the second run (email already registered)
    const email = `shishir${Date.now()}@yopmail.com`;
    await page.getByRole('textbox', { name: /Email/i }).fill(email);
    await page.locator('#password').fill('Shishir@123');
    await page.locator('.interests-div input[type="checkbox"]').first().check();
    await page.locator("//div[@class='interests-div']//div[2]").click();
    await page.locator('div.interests-div').locator('div').nth(5).click();
    await page.locator("//input[@id='gender2']").click();
    await page.locator("//select[@id='state']").selectOption({ value: 'Madhya Pradesh' });
    await page.getByRole('option', { name: /Playing/i }).click({modifiers: ['Control']});
    await page.getByRole('option', { name: /Reading/i }).click({modifiers: ['Control']});
    await page.getByRole('option', { name: /Dancing/i }).click({modifiers: ['Control']});
    await page.getByRole('button', { name: /Sign up/i }).click();
    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/login');
    
    //Login
    await page.getByRole('textbox', { name: 'Enter Email' }).fill(email);
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Shishir@123');
    await page.getByRole('button', { name: /Sign in/i }).click();
    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app');
    await expect(page).toHaveTitle('Learn Automation Courses');

    //practice

})