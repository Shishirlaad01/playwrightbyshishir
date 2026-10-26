const { test, expect } = require('@playwright/test')
const Loginpage = require('../pages/loginpage')
const logout = require('../pages/logout');

test('POM', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    const login = new Loginpage(page);
    await login.logintoapp();
    expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    const logoutaction = new logout(page);
    await logoutaction.logoutaction();
    expect (page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})