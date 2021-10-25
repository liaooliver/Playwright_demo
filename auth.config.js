// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    globalSetup: require.resolve('./global-setup'),
    use: {
        // Tell all tests to load signed-in state from 'storageState.json'.
        storageState: 'storageState.json',
        headless: false
    }
};
module.exports = config;