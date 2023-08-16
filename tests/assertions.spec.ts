import { test, expect } from "@playwright/test";

test("Assertions Demo test", async ({ page }) => {
  //   await page.pause();
  await page.goto("https://kitchen.applitools.com/");
  //ASSERTIONS

  //Check element present or not
  await expect(page.locator('[class="chakra-heading css-dpmy2a"]')).toHaveCount(
    1
  );
  if (await page.$('[class="chakra-heading css-dpmy2a"]')) {
    await page.locator('[class="chakra-heading css-dpmy2a"]').click();
  }

  //Check element hidden or visible
  await expect(
    page.locator('[class="chakra-heading css-dpmy2a"]')
  ).toBeVisible();
  await expect
    .soft(page.locator('[class="chakra-heading css-dpmy2a"]'))
    .not.toBeHidden();

  //Check element enabled or disabled
  await expect(
    page.locator('[class="chakra-heading css-dpmy2a"]')
  ).toBeEnabled();
  await expect
    .soft(page.locator('[class="chakra-heading css-dpmy2a"]'))
    .not.toBeDisabled();

  //Check element to have text or not
  await expect(page.locator('[class="chakra-heading css-dpmy2a"]')).toHaveText(
    "The Kitchen"
  );
  await expect
    .soft(page.locator('[class="chakra-heading css-dpmy2a"]'))
    .not.toHaveText("ABCD");

  //Check Attribute
  await expect
    .soft(page.locator("text=The Kitchen"))
    .toHaveAttribute("class", /chakra-heading.*/);
  await expect
    .soft(page.locator("text=The Kitchen"))
    .toHaveClass(/.*css-dpmy2a/);

  // Visual validation with screenshot
  await expect(page).toHaveScreenshot();
});
