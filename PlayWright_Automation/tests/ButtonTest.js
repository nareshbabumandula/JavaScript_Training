const {chromium, firefox, webkit} = require('playwright');

(async (params) => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a URL
    await page.goto("https://www.mycontactform.com");
    
    // Working with button
    await page.locator('input[name="btnSubmit"]').click();
   
    await page.waitForTimeout(2000);
    await context.close();
    await browser.close();


})();