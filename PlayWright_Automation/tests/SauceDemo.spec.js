import {test, expect} from '@playwright/test'

// test: test is a playwright module used to define and execute test cases/scripts. It's imported from @playwright/test package
// expect: expect is an assertion library provided by Playwright. It is used to validate certian conditions are met during test execution

// Hook with beforeEach
test.describe('Swag Labs Tests', ()=>{
    test.beforeEach(async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
    })


test('Access Site', async ({page}) => {
    // Assertion
     await expect(page).toHaveURL("https://www.saucedemo.com/");
     // Assertion
     await expect(page.locator('#login-button')).toBeVisible();
 });
 
 test('Login into Swag Labs', async ({page}) => {
     await page.locator('#user-name').fill("standard_user");
     await page.waitForTimeout(2000);
     await page.locator('#password').fill("secret_sauce");
     await page.waitForTimeout(2000);
     await page.locator('#login-button').click();
     await page.waitForTimeout(2000);
 });

});