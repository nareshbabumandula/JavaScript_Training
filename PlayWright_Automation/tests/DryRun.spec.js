import {test, expect} from '@playwright/test'
import { link } from 'fs';
/**
 * The async keyword is used to define a function that always returns a Promise. Inside an async fucntion, we can use await keyword to pause
 * the function execution until a Promise resolves, making asynchronous code look synchronous
 */
test.only('Locate and interact with links', async ({page}) => {
    await page.goto("https://www.mycontactform.com/samples.php");
    await page.waitForTimeout(2000);
    
    await page.getByLabel('Pre-Defined Field - Countries:').selectOption("India");
    await page.waitForTimeout(2000);
    await page.getByLabel('Pre-Defined Field - Countries:').selectText("Greenland");
    await page.waitForTimeout(2000);
});

