import {test, expect} from '@playwright/test'

test('Dry Run', async ({page}) => {
    await page.goto("https://www.mycontactform.com/samples.php");
    await page.waitForTimeout(2000);
    
    // Locator by Data Attributes
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.waitForTimeout(2000);

   
    
});