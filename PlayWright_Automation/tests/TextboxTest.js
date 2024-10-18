const {chromium, firefox, webkit} = require('playwright');

(async (params) => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a URL
    await page.goto("https://www.mycontactform.com");
    
    // Working with text box
    await page.locator('id=user').fill('Bhavani');
    await page.locator('id=pass').fill('Secure*1234');
    await page.waitForTimeout(1000);
    await page.locator('input[name="btnSubmit"]').click();
   
    await page.waitForTimeout(2000);
    await browser.close();


})();