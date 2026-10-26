const {test, expect} = require('@playwright/test')

test("Google search test", async ({ page }) => {
	await page.goto("https://www.google.com/")
    const url = page.url()
    expect(url).toBe("https://www.google.com/")
    const title = await page.title()
    await expect(page).toHaveTitle("Google")
    console.log("Current URL is: " + url)
    console.log("Current title is: "+  title)

});