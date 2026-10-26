const {test, expect} = require('@playwright/test')
test ('keyboard test', async ({page})=>{
    await page.goto('https://www.google.com/')
    await page.getByRole('combobox', { name: 'Search' }).focus();
    await page.keyboard.type('shishir laad')
    await page.keyboard.press('ArrowDown', { delay: 2000 });
    await page.keyboard.press('Enter', { delay: 2000 });
    

})