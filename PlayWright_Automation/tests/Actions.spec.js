import {test, expect} from '@playwright/test'

test('Action methods', async ({browser}) => {
    const context = await browser.newContext({permissions:[]}); // Deny all permissions
    const page = await context.newPage();
    await page.goto("https://www.spicejet.com/");
    await page.locator('text=Add-ons').nth(0).hover();
    await page.waitForTimeout(2000);
    await page.locator("//div[contains(text(),'Taxi')]").nth(0).click();
    await page.waitForTimeout(4000);
    // Close the browser
    await context.close(); 
});


test('Drag and Drop methods', async ({page}) => {
    await page.goto("https://jqueryui.com/");
    await page.locator('text=Droppable').click();
    const frame = page.frameLocator('.demo-frame')
    const source = frame.locator('#draggable');
    const target = frame.locator('#droppable');
    await source.dragTo(target);
    await page.waitForTimeout(4000);
});
