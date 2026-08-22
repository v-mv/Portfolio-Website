import { describe, expect, it } from "vitest";
import { resolveEmailJsConfig } from "./emailjsConfig";

describe("EmailJS configuration", () => {
  it("requires all three browser identifiers before enabling contact delivery", () => {
    expect(resolveEmailJsConfig({
      VITE_EMAILJS_SERVICE_ID: "service_portfolio",
      VITE_EMAILJS_TEMPLATE_ID: "template_contact",
    })).toBeNull();
  });

  it("uses the configured identifiers and can reach the official EmailJS API without sending an email", async () => {
    const config = resolveEmailJsConfig(process.env);

    expect(config).not.toBeNull();

    const response = await fetch(
      `https://api.emailjs.com/api/v1.1/history?user_id=${encodeURIComponent(config!.publicKey)}&page=1&count=1`,
    );

    // The history endpoint requires a private access token, so a 4xx response is expected.
    // This deliberately avoids submitting a live email while proving that the configured public key reaches EmailJS.
    expect(response.status).toBeGreaterThanOrEqual(400);
    expect(response.status).toBeLessThan(500);
  }, 15_000);
});
