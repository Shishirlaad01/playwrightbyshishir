# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mousehover.spec.js >> mouse hover
- Location: tests\mousehover.spec.js:2:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.hover: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('span:has-text("Motors")')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e5]:
      - paragraph [ref=e6]: SORRY
      - generic [ref=e7]:
        - paragraph [ref=e8]: Something went wrong on our end
        - separator [ref=e9]
        - paragraph [ref=e10]: 0.7932d417.1792885184.1c904456
        - separator [ref=e11]
        - paragraph [ref=e12]: Please go back and try again.
  - contentinfo [ref=e13]:
    - paragraph [ref=e14]: Copyright © 1995-2026 eBay Inc. All Rights Reserved.
```

# Test source

```ts
  1  | const {test, expect} = require('@playwright/test');
  2  | test("mouse hover", async ({ page }) => {
  3  | await page.goto("https://www.ebay.com/");
  4  | await page.waitForTimeout(200);
> 5  | await page.locator('span:has-text("Motors")').hover();
     |                                               ^ Error: locator.hover: Test timeout of 30000ms exceeded.
  6  | await page.waitForTimeout(200);
  7  | await page.getByRole('link', { name: 'Cars and trucks' }).click();
  8  | await page.waitForURL("https://www.ebay.com/b/Cars-Trucks/6001/bn_1865117");
  9  | await page.waitForTimeout(200);
  10 | 
  11 | await expect(page).toHaveURL("https://www.ebay.com/b/Cars-Trucks/6001/bn_1865117");
  12 | 
  13 | });
```