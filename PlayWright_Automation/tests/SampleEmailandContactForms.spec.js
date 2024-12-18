import { test, expect} from '@playwright/test';

test('test', async ({page}) => {
  await page.setViewportSize({ width: 1500, height: 768 });
  await page.goto('https://www.mycontactform.com/');
  await page.getByRole('link', { name: 'Sample Forms' }).click();
  await page.locator('input[name="email_to\\[\\]"]').first().check();
  await page.getByLabel('Subject: *').fill('Test Subject');
  await page.getByLabel('E-mail Address: *').fill('alex@gmail.com');
  await page.getByLabel('Text Box Field:').fill('Test Field');
  await page.getByLabel('Text Box - Multi Line:').fill('Test\nUser\n');
  await page.getByLabel('Text Box - Multi Line:').fill('Test\nUser\nM');
  await page.getByLabel('Text Box - Multi Line:').fill('Test\nUser\nMulti\nline');
  await page.getByLabel('Drop Down Box:').selectOption('Third Option');
  await page.getByText('First OptionSecond OptionThird OptionFourth OptionFifth Option').click();
  await page.getByRole('radio').nth(1).check();
  await page.getByLabel('Check Box - Single Answer:').check();
  await page.locator('input[name="checkbox6\\[\\]"]').nth(4).check();
  await page.getByLabel('Date Selector:').click();
  await page.getByRole('link', { name: '27' }).click();
  await page.getByLabel('Pre-Defined Field - U.S.').selectOption('KY');
  await page.getByLabel('Pre-Defined Field - Countries:').selectOption('Bangladesh');
  await page.getByLabel('Pre-Defined Field - Canadian').selectOption('Ontario');
  await page.locator('select[name="q11_title"]').selectOption('Mr.');
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.locator('select[name="q12_month"]').selectOption('10');
  await page.locator('select[name="q12_year"]').selectOption('1993');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('listitem')).toContainText('Your verification code was entered incorrectly. Please try again.');
  await page.getByRole('link', { name: 'Back to Form' }).click();
});