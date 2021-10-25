const { test } = require('@playwright/test');

test("示範拖拉的行為", async ({ page }) => {
    await page.goto("https://letcode.in/dropable");
    await page.pause();
    const src = await page.$("#draggable");
    const dst = await page.$("#droppable");

    await page.screenshot({ path: 'test-document/before.png' });

    const srcBound = await src.boundingBox();
    const dstBound = await dst.boundingBox();
    await page.mouse.move(srcBound.x + srcBound.width / 2, srcBound.y + srcBound.height / 2);
    await page.mouse.down();
    await page.mouse.move(dstBound.x + dstBound.width / 2, dstBound.y + dstBound.height / 2);
    await page.mouse.up();

    await page.screenshot({ path: 'test-document/after.png' });
})