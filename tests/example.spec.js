// @ts-check
import { test, expect } from '@playwright/test';
const { homepage } = require('../Pages/homepage.js'); // Adjust the path as needed

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  console.log('test');
});


test('get started link ', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Navigation ',{tag: '@smoke'},async({page})=>{

    const homepage1 = new homepage(page);

await page.goto('https://cosmocode.io/automation-practice-webtable/');

await homepage1.clickCountyCheckbox('Angola');
console.log('');

});


test('selectCountry1 ',{tag:'@smoke'},async({page})=>{
    const homepage1 = new homepage(page);

await page.goto('https://cosmocode.io/automation-practice-webtable/');

await homepage1.clickCountyCheckbox('Bhutan');
console.log('');

});

test('selectCountry2 ',{tag:'@regression'},async({page})=>{
    const homepage1 = new homepage(page);

await page.goto('https://cosmocode.io/automation-practice-webtable/');

await homepage1.clickCountyCheckbox('Canada');
console.log('test');

});