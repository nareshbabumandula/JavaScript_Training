import {test, expect} from '@playwright/test'

test('Locate and interact with links', async ({page}) => {
    await page.goto("https://www.mycontactform.com");
    await page.waitForTimeout(2000);
    
    // Locate a link by text
    await page.locator('text=">> More Testimonials"').click();
    await page.waitForTimeout(2000);

    // Locate a link by its href
    await page.locator('[href="https://www.mycontactform.com/samples.php"]').click();
    await page.waitForTimeout(2000);
    
    // Locate a link by role
    await page.locator('role=link[name="Resources"]').click();
    await page.waitForTimeout(2000);
    
    // Checkpoint or Assertion
    await expect(page).toHaveTitle("Webmaster Resources - myContactForm.com");
    console.log("Page heading display status is : " + await page.locator('text="Webmaster Resources"').isVisible());

    // Locate a link by role
    await page.goBack();
    await page.waitForTimeout(2000);
    await page.locator('role=link[name="Resources"]').click();
    await page.waitForTimeout(2000);
    
    await expect(page).toHaveTitle("Webmaster Resources - myContactForm.com");
    const heading = await page.locator('text="Webmaster Resources"');
    console.log(await heading.isVisible());
    console.log(await heading.isEnabled());
    console.log(await heading.isHidden());
    console.log("Page heading display status is : " + await page.locator('text="Webmaster Resources"').isVisible());

    // Locate a link based on exact text match
    await page.locator('//a[contains(text(),"Sample Forms")]').click();
    await page.goto("https://www.mycontactform.com");
    await page.waitForTimeout(2000);

    // Locate a link based on partial text match
    await page.locator('//a[contains(text(),"Sample F")]').click();
    await page.goto("https://www.mycontactform.com");
    await page.waitForTimeout(2000);

    // Locate all link on the page
    await page.goto("https://www.mycontactform.com");
    const links = await page.locator('a');
    const count = await links.count();
    console.log("No of links found on the page are : " + count);

    for (let i = 0; i < count; i++) {
        console.log(await links.nth(i).textContent());
    }

});