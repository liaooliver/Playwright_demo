const { chromium } = require('@playwright/test');
const { USERNAME, PASSWORD } = require('../account');
module.exports = async config => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://github.com/login');
    await page.fill('input[name="login"]', USERNAME);
    await page.fill('input[name="password"]', PASSWORD);
    await page.click('input:has-text("Sign in")')
    // Save signed-in state to 'storageState.json'.
    await page.context().storageState({ path: 'storageState.json' });
    await browser.close();
};