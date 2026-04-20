import { test, expect } from "@playwright/test";

/**
 * End to End testing: desktop product gallery
 */
test.describe("Home page test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/"); // baseURL
  });

  test("check elements", async ({ page }) => {
    const title = page.getByRole("heading", { level: 1 });

    await expect(title).toBeVisible();
  });
});
