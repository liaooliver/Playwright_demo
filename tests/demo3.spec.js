const { test, expect } = require('@playwright/test');

test('示範 hover 行為與 page.$$ 選取器的範例', async ({ page }) => {
    await page.goto('https://www.miniasp.com/');
    // call inspector
    await page.pause();
    // hover text=教育訓練
    await page.hover('text=教育訓練');
    // Click text=公開課程
    await page.click('text=公開課程');
    
    const coursesLength = await page.$$('.thumbnail');
    await expect(coursesLength.length).toBe(5);
});
