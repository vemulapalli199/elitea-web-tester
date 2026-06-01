import { test, expect } from '@playwright/test';

test.describe('EPAM navigation', () => {
  test('Services header menu opens Client Work page and shows Client Work text', async ({ page }) => {
    await page.goto('https://www.epam.com/');

    await page.getByRole('button', { name: /^Services$/ }).click();
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    await expect(page).toHaveURL(/\/services\/client-work/);
    await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
  });
});
