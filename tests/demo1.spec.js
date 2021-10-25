const { test, expect } = require('@playwright/test');

test('第一個測試範例', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.pause()
    const title = page.locator('.navbar__inner .navbar__title');
    await expect(title).toHaveText('Playwright');
})