# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 3.POM.spec.js >> POM
- Location: tests\3.POM.spec.js:5:1

# Error details

```
TypeError: Loginpage.logintoapp is not a function
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | const Loginpage = require('../pages/loginpage')
  3  | const logout = require('../pages/logout');
  4  | 
  5  | test('POM', async ({ page }) => {
  6  |     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  7  |     //const login = new Loginpage(page);
  8  |     //const logout = new logout(page);
> 9  |     await Loginpage.logintoapp();
     |                     ^ TypeError: Loginpage.logintoapp is not a function
  10 |     await logout.logoutaction();
  11 | 
  12 | })
```