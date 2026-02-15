//@ts-check
import { test, expect } from '@playwright/test';
const { homepage } = require('../Pages/homepage.js'); // Adjust the path as needed  

test('browserContext', async ({ page }) => {
  const {chromium} = require('playwright');
    const browser = await chromium.launch({headless: false });

    const context = await browser.newContext();

    const page1 = await context.newPage();  
    page1.goto('https://practicetestautomation.com/practice-test-login/');
    
    console.log('test');
    await browser.close();
});
