const { test, expect } = require('@playwright/test');
const testdata = require('../datadriven.json');

for (const data of testdata) {
    test(`Login test - ${data.scenario}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByPlaceholder('Username').fill(data.username);
        await page.getByPlaceholder('Password').fill(data.password);
        await page.getByRole('button', { name: 'Login' }).click();

        if (data.expectedResult === 'success') {
            await expect(page).toHaveURL(/dashboard/);
            console.log(`[${data.scenario}] Login successful - Dashboard opened`);
        } else {
            const alert = page.getByRole('alert');
            await expect(alert).toBeVisible();
            const errorMessage = (await alert.textContent()).trim();
            console.log(`[${data.scenario}] Validation error message: ${errorMessage}`);
            test.info().annotations.push({ type: 'Validation error message', description: errorMessage });
            expect(errorMessage).toContain(data.expectedMessage);
            await expect(page).toHaveURL(/auth\/login/);
        }
    });
}