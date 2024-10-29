const {chromium, firefox, webkit} = require('playwright');

(async (params) => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a URL
    await page.goto("https://www.mycontactform.com");

    // 1.ancestor: These axes indicate all the ancestors relative to the context node, also reaching up to the root node.
    const username = await page.locator('xpath=//input[@id="pass"]/ancestor::fieldset/div/input').nth(0);
    username.fill("Ramu");
    
    await page.waitForTimeout(4000);
    await context.close();
    await browser.close();

})();

