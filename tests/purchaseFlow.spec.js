import { test, expect } from "@playwright/test";

test("test purchase flow", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // Login with valid credentials
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  // Add items to cart
  await page
    .locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
    .click();
  await page
    .locator(
      '[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]'
    )
    .click();

  // Go to cart
  await page.locator("a").filter({ hasText: "2" }).click();

  // Remove one item from cart
  await page
    .locator('[data-test="remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]')
    .click();

  // Checkout
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill("Greta");
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill("Curro");
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill("4000");
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  // Return to Home
  await page.locator('[data-test="back-to-products"]').click();
});
