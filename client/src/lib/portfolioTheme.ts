export type PortfolioTheme = "dark" | "light";

export const PORTFOLIO_THEME_KEY = "mohit-portfolio-theme";

export function normalizePortfolioTheme(value: string | null | undefined): PortfolioTheme {
  return value === "light" ? "light" : "dark";
}

export function resolvePortfolioTheme(storedTheme: string | null | undefined, search = ""): PortfolioTheme {
  const requestedTheme = new URLSearchParams(search).get("theme");
  if (requestedTheme === "dark" || requestedTheme === "light") return requestedTheme;
  return normalizePortfolioTheme(storedTheme);
}

export function togglePortfolioTheme(theme: PortfolioTheme): PortfolioTheme {
  return theme === "dark" ? "light" : "dark";
}
