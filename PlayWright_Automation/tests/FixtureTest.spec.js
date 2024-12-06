import { test, expect} from '@playwright/test';

// Define a fixture (reusable component that can be used across multiple test cases)
test.beforeEach(async ({page}) => {
    await page.goto('https://www.mycontactform.com'); // common setp which needs to be executed before each test case
});

test('Verify the title of the page', async ({page}) => {
    await page.goto('https://www.mycontactform.com');
    expect(await page.title()).toBe('Free Contact and Email Forms | myContactForm.com');
});

test('Check presence of element', async ({page}) => {
    const element = await page.$('h3');
    expect(element).not.toBeNull();
});



