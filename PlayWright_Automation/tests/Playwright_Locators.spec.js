import {test, expect} from '@playwright/test'

// test: test is a playwright module used to define and execute test cases/scripts. It's imported from @playwright/test package
// expect: expect is an assertion library provided by Playwright. It is used to validate certian conditions are met during test execution

// Hook with beforeEach
test.describe('Swag Labs Tests', ()=>{
    test.beforeEach(async ({page}) => {
        await page.goto("https://www.mycontactform.com/");
    })

    test('Login into Swag Labs', async ({page}) => {
       // Locating an object by CSS Selectors using class attribute
        await page.locator('.txt_log').nth(0).fill("Ramu")
        await page.waitForTimeout(2000);

       // Locating an object by CSS Selectors using ID attribute
       await page.locator('#user').fill("Uday")
       await page.waitForTimeout(2000);

        // Locating an object by CSS Selectors using attributes
        await page.locator('[name="user"]').fill("Bhavani")
        await page.waitForTimeout(2000);

        // Locating an object by CSS Selectors using multiple attributes with AND condition
        await page.locator('[name="user"][id="user"]').fill("Naresh")
        await page.waitForTimeout(2000);

        // Locating an object by CSS Selectors using multiple attributes with OR condition
        await page.locator('[name="user"],[id="username"]').fill("Shiva")
        await page.waitForTimeout(2000);

        // Locating an object by CSS Selectors using multiple attributes with AND and OR conditions combination
        await page.locator('[name="user"][id="user"],[class="txt_log123"]').fill("Teja")
        await page.waitForTimeout(2000);

        // Locating an object by CSS Selector using 
        await page.locator('div>input#user').fill("Ramesh")
        await page.waitForTimeout(2000);

        // Locating an object with text
        await page.locator('text="Sample Forms"').click();
        await page.waitForTimeout(2000);

        // Locating an object based on its partial text
        await page.goBack(); // Navigate backward
        await page.locator('text=Sample').click();
        await page.waitForTimeout(2000);

        // Locating an object based on its partial text using regular expressions
        await page.goBack(); // Navigate backward
        await page.locator(/Sample.*/).click();
        await page.waitForTimeout(2000);

        // Locating by Role like button, link, image etc
        await page.goBack(); // Navigate backward
        await page.getByRole('link', {name:'Sample Forms'}).click();
        await page.waitForTimeout(2000);
    });
});

