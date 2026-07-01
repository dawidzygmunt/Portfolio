import { test, expect } from '@playwright/test'

test('home page renders main content', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('#main-content')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Check Resume' })).toBeVisible()
})

test('project modal opens and closes', async ({ page }) => {
  await page.goto('/')

  const firstProjectCard = page.getByRole('button', { name: /View details for/ }).first()
  await firstProjectCard.click()

  const closeButton = page.getByRole('button', { name: 'Close modal' })
  await expect(closeButton).toBeVisible()

  await closeButton.click()
  await expect(closeButton).not.toBeVisible()
})

test('resume download link is present and correct', async ({ page }) => {
  await page.goto('/')

  const cvLink = page.locator('a[download][href*="Dawid_Zygmunt_CV.pdf"]')
  await expect(cvLink).toBeVisible()
  await expect(cvLink).toHaveAttribute('href', 'Dawid_Zygmunt_CV.pdf')
})
