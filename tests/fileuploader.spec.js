const { test, expect } = require('@playwright/test');
const path = require('path')

test('file upload test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles(
      "C:\\Users\\ADMIN\\Downloads\\1669981891082.jpg",);
    await page.locator('#file-submit').click();
    await expect(page.locator('h3')).toHaveText('File Uploaded!');
    
});