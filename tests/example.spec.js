// @ts-check
import { test, expect } from '@playwright/test';
const { homepage } = require('../Pages/homepage.js'); // Adjust the path as needed

test('has title', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  console.log('test');
});
