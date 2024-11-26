import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.eyeglassworld.com/');
  await page.getByPlaceholder('City, State, or ZIP code').click();
  await page.getByPlaceholder('City, State, or ZIP code').fill('tampa');
  await page.getByRole('button', { name: 'Find a Store' }).click();
  await page.getByText('tampa', { exact: true }).first().click();
  await expect(page.locator('#poiEl')).toContainText('tampa');
  await expect(page.getByRole('link', { name: 'Get Directions to The Plaza' })).toBeVisible();
  await expect(page.locator('article').filter({ hasText: 'The Plaza at Estrella 3.3 mi3' }).getByRole('link').nth(3)).toBeVisible();
  await expect(page.locator('article').filter({ hasText: 'The Plaza at Estrella 3.3 mi3' }).getByRole('link').nth(4)).toBeVisible();
});