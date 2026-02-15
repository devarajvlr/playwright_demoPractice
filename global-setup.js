const { chromium } = require('@playwright/test');

module.exports = async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.locator("//input[@name='username']").fill('student');
  await page.locator("//input[@name='password']").fill('Password123');
  await page.locator("//button[@id='submit']").click();
  await page.waitForLoadState('networkidle');
  await context.storageState({ path: 'auth.json' });
  await browser.close();
};