const {chromium, firefox, webkit} = require('playwright');

(async (params) => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a URL
    await page.goto("https://www.mycontactform.com");
    // Click on link with complete link name
    await page.click('a:has-text("Sample Forms")');

    // Click on link with partial link name
    //await page.click('a:has-text("Sample")');
    
    // absolute xpath for the Subject field
    await page.fill('xpath=/html/body/div[3]/div[3]/form/table/tbody/tr[2]/td/input', 'Test Subject');
    await page.waitForTimeout(2000);
    await page.fill('xpath=/html/body/div[3]/div[3]/form/table/tbody/tr[2]/td/input', '');

    // relative xpath from the node of our choice
    await page.fill('xpath=//table/tbody/tr[2]/td/input', 'Test Subject..!');
    
    // relative xpath with attributes
    await page.fill('//input[@id="user"]', 'srikanth');
    await page.fill('//input[@id="pass"]', 'Secure*1234');
    await page.fill('//input[@id="pass"]', '');

    // relative xpath with and keyword
    await page.fill('//input[@id="user" and @name="user"]', 'Ramu');
    await page.waitForTimeout(2000);
    await page.fill('//input[@id="user" and @name="user"]', '');

    // relative xpath with or keyword
    await page.fill('//input[@id="user" or @name="user123"]', 'Sravya');
    await page.fill('//input[@id="user" or @name="user123"]', '');

    // xpath with starts-with 
    //const element = await page.locator('xpath=//input[starts-with(@id,"use") and not(@type="hidden")]');
    const element = await page.locator('xpath=//input[starts-with(@id,"use")]').nth(0); // first element as per index 0
    await element.fill("Kavya");
    await page.waitForTimeout(2000);

    // xpath with contains 
    //await page.locator('xpath=//input[contains(@id,"se") and not(@type="hidden")]').fill("Bhavani");
    await page.locator('xpath=//input[contains(@id,"se")]').nth(0).fill("Bhavani");

    // check the visibility of the object
    const visible = await page.locator('xpath=//input[contains(@id,"se")]').nth(0).isVisible();
    console.log(`Element visibility status is :  ${visible}`);
        
    await page.waitForTimeout(4000);
    await context.close();
    await browser.close();

})();

