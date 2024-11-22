import {test, expect} from '@playwright/test'
import { link } from 'fs';
/**
 * The async kwyowrd is used to define a function that always returns a Promise. Inside an async fucntion, we can use await keyword to pause
 * the function execution until a Promise resolves, making asynchronous code look synchronous
 */
test('Locate and interact with links', async ({page}) => {
    await page.goto("https://www.mycontactform.com");
    await page.waitForTimeout(2000);
    
    
});