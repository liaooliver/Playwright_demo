/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    globalSetup: require.resolve('./global-setup'),
    use: {
        headless: false,
        // Tell all tests to load signed-in state from 'storageState.json'.
        storageState: 'storageState.json'
    }
};
module.exports = config;