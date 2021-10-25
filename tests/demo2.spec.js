const { test, expect } = require('@playwright/test');
const { USERNAME, PASSWORD } = require('./account');

test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://github.com/login');
});

test.describe("Github 登入測試與表單填寫範例", () => {

    test('登入成功', async ({ page }) => {
        await page.pause()
        
        // Click input[name="login"]
        await page.fill('input[name="login"]', USERNAME);

        // Click input[name="password"]
        await page.fill('input[name="password"]', PASSWORD);
        
        await page.click('input:has-text("Sign in")')
        await expect(page).toHaveURL('https://github.com/');

        await page.click('[aria-label="View profile and more"]');
        // Click text=Your profile go to profile page
        await page.click('text=Your profile');
        await expect(page).toHaveURL('https://github.com/liaooliver');
        // expect text=Oliver Liao
        await expect(page.locator('text=Oliver Liao')).toBeTruthy();
    });

    test('登入失敗', async ({ page }) => {
        await page.pause()
        // Click input[name="login"]
        await page.fill('input[name="login"]', "");

        // Click input[name="password"]
        await page.fill('input[name="password"]', "");

        await page.click('input:has-text("Sign in")')
        await expect(page).toHaveURL('https://github.com/session');

        // Visible text=Incorrect username or password.
        await expect(page.locator('text=Incorrect username or password.')).toBeVisible();
    });
})