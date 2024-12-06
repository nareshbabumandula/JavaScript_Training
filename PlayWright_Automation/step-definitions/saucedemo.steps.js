import { Given, When, Then } from ('@cucumber/cucmber');
import { expect } from ('chai');
import { chromium } from ('playwright');

let browser, page;

Given('I navigate to the SauceDemo login page', async (params) => {
   browser = await chromium.launch({headless:false});
   const context = browser.newContext();
   page = (await context).newPage();
   await page.goto('/')
});

 When('I login with {string} and {string}', async (username, password) => {
    await page.fill('input#user-name', username);
    await page.fill('input#password', password);
    await page.click('input#login-button');
 });

 Then('I should see the products page', async () => {
   const title = await page.textContent('.title');
   expect(title).to.equal('Products');
   await browser.close();
 });

