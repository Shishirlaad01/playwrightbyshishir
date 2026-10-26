const {test, expect} = require('@playwright/test');
test ('Practice test', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    await page.getByRole('textbox', { name: 'Enter Email' }).fill('shishir4@yopmail.com');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('Shishir@123');
    await page.getByRole('button', { name: /Sign in/i }).click();
    await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app');
    await expect(page).toHaveTitle('Learn Automation Courses');

    await page.getByRole('img', { name: /menu/i }).click();
    await page.locator("//div[normalize-space()='Practise']").click();
    await page.locator('button:has-text("Enable field")').click();
    await page.waitForTimeout(6000);
const field = page.getByRole('textbox', { name: /Now you can write/i });
const fieldeditable = await field.isEditable();
expect(fieldeditable).toBeTruthy();
    await page.getByRole('textbox', { name: /Now you can write/i }).fill('shishir');
    await page.locator("//button[normalize-space()='Show']").click();
    const visible = page.locator('//*[@id="root"]/div/div[2]/div/div[3]/input');
    await expect(visible).toBeVisible();
    await page.locator('button:has-text("Hide")').click();
    await expect(visible).toBeHidden();
// browser pop up listner
    page.once('dialog', async dialog => {
    console.log('Popup message: ', dialog.message());
    await dialog.accept();   // clicks OK
});
await page.getByRole('button', { name: /Double Click me to see magic/i }).click({ clickCount: 2 });
await page.locator("//button[normalize-space()='Right Click me to see magic']").click({button: 'right'});
    
});
