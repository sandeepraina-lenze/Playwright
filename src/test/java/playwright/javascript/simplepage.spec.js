const { test, expect } = require('@playwright/test');

test('basic test', async({ page }) => {
    await page.goto('https://playwright.dev/');
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
});

test('example test', async ({ page }) => {
  await page.goto('https://store.staging.mosaiq-dev.de/');
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
});