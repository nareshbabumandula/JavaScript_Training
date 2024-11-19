import {test, expect} from '@playwright/test'

test('Dry Run', async ({page}) => {
    await page.goto("https://www.mycontactform.com/");
    await page.waitForTimeout(2000);
    await page.getByRole('link', {name:'Sample Forms'}).click();
});