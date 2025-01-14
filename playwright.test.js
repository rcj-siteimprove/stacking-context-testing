import fs from "fs/promises";
import path from "path";

import { test, expect } from "@playwright/test";

const htmlFiles = await fs
  .readdir(import.meta.dirname)
  .then((files) => files.filter((file) => path.extname(file) === ".html"));

htmlFiles.forEach((htmlFile) =>
  test(htmlFile, async ({ page }) => {
    await page.goto(htmlFile);

    const testContainer = await page.locator("id=test-container");
    const expected = await testContainer.getAttribute("data-expected");

    await expect(testContainer).toHaveAttribute("data-actual", expected);
  }),
);
