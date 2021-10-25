const { test, expect } = require('@playwright/test');

// 第一種方法 beforeEach 登入
// test.beforeEach(async ({ page }) => {
//     // Runs before each test and signs in each page.
//     await page.goto('https://github.com/login');
//     await page.click('text=Login');
//     await page.fill('input[name="login"]', 'username');
//     await page.fill('input[name="password"]', 'password');
//     await page.click('text=Submit');
// });

// 第二種方法 重複使用登錄狀態
test("重複使用登錄狀態進入到 github 關於我頁面", async ({ page }) => {
    await page.goto('https://github.com/liaooliver');
    // Click text=Oliver Liao
    await expect(page.locator('text=Oliver Liao')).toBeTruthy();
})
