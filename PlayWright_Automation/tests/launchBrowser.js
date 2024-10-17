const {chromium, firefox, webkit} = require('playwright');

(async (params) => {
    //const browser = await chromium.launch({headless:false});
    const browser = await webkit.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to a URL
    await page.goto("https://www.mycontactform.com");
    await page.waitForTimeout(5000);

    // Get a current URL
    const currentURL = page.url();
    console.log('Current URL is : ', currentURL);

    // Get a page title
    const pageTitle = await page.title();
    console.log('Current page title is : ', pageTitle);

    await page.goto('https://www.mycontactform.com/samples.php');
    console.log('Naviagted to URL : ', page.url());

    // Go back to the previous page
    await page.goBack();

    // Go forward to the next page
    await page.goForward();
    
    // Refresh the page
    await page.reload();

    await browser.close();
})();

