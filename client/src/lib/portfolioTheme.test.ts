import { describe, expect, it } from "vitest";
import { normalizePortfolioTheme, resolvePortfolioTheme, togglePortfolioTheme } from "./portfolioTheme";

describe("portfolio theme utilities", () => {
  it("defaults unknown and missing saved values to the dark theme", () => {
    expect(normalizePortfolioTheme(null)).toBe("dark");
    expect(normalizePortfolioTheme("system")).toBe("dark");
  });

  it("preserves a saved light theme and toggles between both supported modes", () => {
    expect(normalizePortfolioTheme("light")).toBe("light");
    expect(togglePortfolioTheme("dark")).toBe("light");
    expect(togglePortfolioTheme("light")).toBe("dark");
  });

  it("supports an explicit preview mode without overriding normal stored behavior", () => {
    expect(resolvePortfolioTheme("dark", "?theme=light")).toBe("light");
    expect(resolvePortfolioTheme("light", "?theme=invalid")).toBe("light");
  });
});
