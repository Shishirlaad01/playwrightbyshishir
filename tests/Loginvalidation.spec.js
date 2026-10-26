const { test, expect } = require('@playwright/test')
test("validation", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.getByRole('textbox', { name: /Username/i }).fill("Admin1")
    await page.locator('[name="password"]').fill("admin123")
    await page.getByRole('button', { name: /Login/i }).click()

const invalidAlert = page.locator(".oxd-alert-content-text")
    await expect(invalidAlert).toBeVisible()
    await expect(invalidAlert).toContainText("Invalid")              // partial match
    await expect(invalidAlert).toHaveText("Invalid credentials")
})