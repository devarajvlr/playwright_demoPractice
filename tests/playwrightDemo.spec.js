//@ts-check

import {test, expect} from '@playwright/test';

test('basic test', async({page})=>{
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await page.getByRole('link', {name: 'Get Started'}).click();
    await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
})


