const{test, expect} = require('@playwright/test')
test ("hss uk signup", async({page})=>{
await page.goto('https://hss-uk.projectspreview.net/');
//await page.locator("//img[@alt='My HSS']").toBeVisible();
await page.getByRole('button', { name: 'Create Account' }).click();
await page.locator("//a[@href='/member-registration?type=member']").click();
expect (page).toHaveURL('https://hss-uk.projectspreview.net/member-registration?type=member');
expect (page.getByText('Create Member Account')).toBeVisible();
await page.getByLabel('First Name*').fill('Test');
await page.getByLabel('Last Name*').fill('User');
await page.getByLabel('Email*').fill('testuser1@yopmail.com');
await page.locator("//input[@name='password']").fill('TestUser@123');
await page.locator("//input[@name='confirmPassword']").fill('TestUser@123');
await page.getByRole('checkbox').click();
await page.getByRole('button', { name: 'Create Account' }).click();

})