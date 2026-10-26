const { test, expect } = require('@playwright/test')

//test.use({ viewport: { width: 1000, height: 1000 } })

test('Login test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const { width, height } = page.viewportSize()
    console.log(`Viewport: ${width}x${height}`)

    await page.getByRole('textbox', { name: /Username/i }).fill('Admin')
    await page.locator('[name="password"]').fill('admin123')
    await page.getByRole('button', { name: /Login/i }).click()

    await expect(page).toHaveURL(/\/dashboard\/index/)

    const profilePicture = page.getByRole('img', { name: 'profile picture' })
    await expect(profilePicture).toBeVisible()
    await profilePicture.screenshot({path : 'profile-picture.png'})
    await page.locator(".oxd-userdropdown-name").click()                 // opens the user dropdown (name-independent)
    await page.getByText('Logout').click()

    await expect(page).toHaveURL(/\/auth\/login/)
})