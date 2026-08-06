import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() =>
    sessionStorage.setItem("kelvar-splash-seen", "true"),
  );
});

test("core routes expose their primary content", async ({ page }) => {
  await page.goto("/kelvarx");
  await expect(
    page.getByRole("heading", { name: /kelvarx/i }).first(),
  ).toBeVisible();

  await page.goto("/kelvarx/stratokite");
  await expect(page.getByRole("heading", { name: "Stratokite" })).toBeVisible();
});

test("contact form validates input and describes delivery honestly", async ({
  page,
}) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: /open email composer/i }).click();

  await expect(page.getByText("This field is required.").first()).toBeVisible();
  await expect(page.getByText(/mail application/i)).toBeVisible();
});
