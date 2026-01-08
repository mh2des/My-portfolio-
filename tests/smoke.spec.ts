import { test, expect } from "@playwright/test";

test.describe("Portfolio Smoke Tests", () => {
    test("home page loads correctly", async ({ page }) => {
        await page.goto("/");

        // Check main heading
        await expect(page.locator("h1")).toContainText("Mansoor Hasan Ali Shokal");

        // Check navigation
        await expect(page.getByRole("link", { name: "Work" })).toBeVisible();
        await expect(page.getByRole("link", { name: "About" })).toBeVisible();
        await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();

        // Check stats bar
        await expect(page.getByText("189K+")).toBeVisible();
        await expect(page.getByText("700+")).toBeVisible();
    });

    test("navigation works", async ({ page }) => {
        await page.goto("/");

        // Navigate to Work
        await page.getByRole("link", { name: "Work" }).first().click();
        await expect(page).toHaveURL("/work");
        await expect(page.locator("h1")).toContainText("Selected Projects");

        // Navigate to About
        await page.getByRole("link", { name: "About" }).first().click();
        await expect(page).toHaveURL("/about");
        await expect(page.locator("h1")).toContainText("Building Tools");

        // Navigate to Contact
        await page.getByRole("link", { name: "Contact" }).first().click();
        await expect(page).toHaveURL("/contact");
        await expect(page.locator("h1")).toContainText("Work Together");
    });

    test("project cards link to case studies", async ({ page }) => {
        await page.goto("/work");

        // Click on first project card
        await page.getByRole("link", { name: /Qamoos/i }).click();
        await expect(page).toHaveURL("/work/qamoos");
        await expect(page.locator("h1")).toContainText("Qamoos.org");
    });

    test("keyboard navigation works", async ({ page }) => {
        await page.goto("/");

        // Tab through navigation
        await page.keyboard.press("Tab"); // Skip link
        await page.keyboard.press("Tab"); // Logo
        await page.keyboard.press("Tab"); // First nav item

        // Enter should navigate
        await page.keyboard.press("Enter");
        await expect(page).toHaveURL("/");
    });

    test("mobile menu opens", async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto("/");

        // Menu button should be visible on mobile
        const menuButton = page.getByRole("button", { name: /menu/i });
        await expect(menuButton).toBeVisible();

        // Click to open menu
        await menuButton.click();

        // Navigation links should appear
        await expect(page.getByRole("link", { name: "Work" })).toBeVisible();
    });
});
