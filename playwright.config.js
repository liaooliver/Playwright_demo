/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    outputDir: 'test-document',
    use:{
        headless: false,
        video: 'on',
    },
    projects:[]
};
module.exports = config;