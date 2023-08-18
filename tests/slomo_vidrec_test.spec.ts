import { test, expect, chromium } from "@playwright/test";

//Remove the ".skip" when running locally
test.skip("Slow Motion and Video Recording Demo", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });
  const context = await browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: { width: 800, height: 600 },
    },
  });
  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="username"]').press("Tab");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.getByRole("link", { name: "Logout" }).click();

  await context.close();
});
