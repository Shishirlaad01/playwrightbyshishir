# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dropdown3.spec.js >> dropdown test
- Location: tests\dropdown3.spec.js:3:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://freelance-learn-automation.vercel.app/login"
Received: "https://freelance-learn-automation.vercel.app/signup"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://freelance-learn-automation.vercel.app/signup"

```

```yaml
- navigation:
  - img "logo"
  - heading "Learn Automation Courses" [level=1]
  - img "menu"
  - text: Learn Automation Courses
  - img "delete"
  - link "Home":
    - /url: /
  - link "Practise":
    - /url: /practise
  - button "Log in"
- heading "Sign Up" [level=2]
- textbox "Name": John Doe
- textbox "Email": shishir4@yopmail.com
- textbox "Password must be atleast 6 characters":
  - /placeholder: Password
  - text: Shishir@123
- heading "Interests" [level=4]
- checkbox "Rag_chint"
- text: Rag_chint
- checkbox "API12" [checked]
- text: API12
- checkbox "API1234" [checked]
- text: API1234
- checkbox "automation"
- text: automation
- checkbox "API123"
- text: API123
- checkbox "react"
- text: react
- checkbox "RAG"
- text: RAG
- checkbox "rest assured"
- text: rest assured
- checkbox "appium"
- text: appium
- checkbox "Navjot Category"
- text: Navjot Category
- checkbox "JK"
- text: JK
- checkbox "abc"
- text: abc
- checkbox "PlaywrightTests"
- text: PlaywrightTests
- checkbox "JavaScript"
- text: JavaScript
- checkbox "SQL"
- text: SQL
- checkbox "Updated Test Category"
- text: Updated Test Category
- heading "Gender" [level=4]
- radio
- text: Male
- radio [checked]
- text: Female
- heading "State:" [level=4]
- combobox:
  - option "Andhra Pradesh"
  - option "Arunachal Pradesh"
  - option "Assam"
  - option "Bihar"
  - option "Chhattisgarh"
  - option "Goa"
  - option "Gujarat"
  - option "Haryana"
  - option "Himachal Pradesh"
  - option "Jammu and Kashmir"
  - option "Jharkhand"
  - option "Karnataka"
  - option "Kerala"
  - option "Madhya Pradesh" [selected]
  - option "Maharashtra"
  - option "Manipur"
  - option "Meghalaya"
  - option "Mizoram"
  - option "Nagaland"
  - option "Odisha"
  - option "Punjab"
  - option "Rajasthan"
  - option "Sikkim"
  - option "Tamil Nadu"
  - option "Telangana"
  - option "Tripura"
  - option "Uttarakhand"
  - option "Uttar Pradesh"
  - option "West Bengal"
  - option "Andaman and Nicobar Islands"
  - option "Chandigarh"
  - option "Dadra and Nagar Haveli"
  - option "Daman and Diu"
  - option "Delhi"
  - option "Lakshadweep"
  - option "Puducherry"
- heading "Hobbies:" [level=4]
- listbox:
  - option "Playing" [selected]
  - option "Reading" [selected]
  - option "Swimming"
  - option "Singing"
  - option "Dancing" [selected]
- heading "error Email already registered!" [level=2]:
  - img "error"
  - text: Email already registered!
- button "Sign up"
- link "Already a user? Login":
  - /url: /login
- img "Login"
- heading "Learn Automation By Mukesh Otwani" [level=3]
- heading "©2023 All rights reserved" [level=2]
- link:
  - /url: https://youtube.com/MukeshOtwani
  - img
- link:
  - /url: https://twitter.com/MukeshOtwani
  - img
- link:
  - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
  - img
- link:
  - /url: https://www.facebook.com/groups/256655817858291
  - img
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('dropdown test', async ({ page }) => {
  4  |     
  5  |     //Signup
  6  | 
  7  |     await page.goto('https://freelance-learn-automation.vercel.app/signup');
  8  |     await page.getByRole('textbox', { name: /Name/i }).fill('John Doe');
  9  |     await page.getByRole('textbox', { name: /Email/i }).fill('shishir4@yopmail.com');
  10 |     await page.locator('#password').fill('Shishir@123');
  11 |     await page.locator('div').filter({ hasText: 'Rag_chint' }).first().click();
  12 |     await page.locator("//div[@class='interests-div']//div[2]").click();
  13 |     await page.locator('div.interests-div').locator('div').nth(5).click();
  14 |     await page.locator("//input[@id='gender2']").click();
  15 |     await page.locator("//select[@id='state']").selectOption({ value: 'Madhya Pradesh' });
  16 |     await page.getByRole('option', { name: /Playing/i }).click({modifiers: ['Control']});
  17 |     await page.getByRole('option', { name: /Reading/i }).click({modifiers: ['Control']});
  18 |     await page.getByRole('option', { name: /Dancing/i }).click({modifiers: ['Control']});
  19 |     await page.getByRole('button', { name: /Sign up/i }).click();
> 20 |     await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app/login');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  21 |     
  22 |     //Login
  23 |     await page.getByRole('textbox', { name: 'Enter Email' }).fill('shishir4@yopmail.com');
  24 |     await page.getByRole('textbox', { name: 'Enter Password' }).fill('Shishir@123');
  25 |     await page.getByRole('button', { name: /Sign in/i }).click();
  26 |     await expect(page).toHaveURL('https://freelance-learn-automation.vercel.app');
  27 |     await expect(page).toHaveTitle('Learn Automation Courses');
  28 | 
  29 |     //practice
  30 | 
  31 | })
```