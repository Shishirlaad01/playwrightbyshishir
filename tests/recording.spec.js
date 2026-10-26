import { test, expect } from '@playwright/test';
test.use({ 'viewport': { width: 1000, height: 1000 } });
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin',{ delay: 100 });
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123',{ delay: 100 });
  const loginButton = await page.getByRole('button', { name: 'Login' });
  console.log(loginButton);
  await loginButton.click({ delay: 100 });
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});