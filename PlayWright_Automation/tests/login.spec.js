import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage';
import { log } from 'console';

test('Login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);

    // Navigate to the application
    await loginPage.navigateTo();

    // login with valid credentials
    await loginPage.login('standard_user', 'secret_sauce');
    const title = await loginPage.verifyProductsPage();
    console.log("Products title is : " + title);
    await page.waitForTimeout(2000);
    await loginPage.verifyLogout();
    await page.waitForTimeout(2000);

    // login with invalid credentials
    await loginPage.login('standard_user123', 'secret_sauce');
    const errMsg = await loginPage.getErrorMessage();
    expect(errMsg).toBe('Epic sadface: Username and password do not match any user in this service');

});

