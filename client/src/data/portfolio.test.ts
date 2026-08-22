import { describe, expect, it } from "vitest";
import { portfolio } from "./portfolio";

describe("LINAC explainer content", () => {
  it("provides a complete, ordered high-level explanation with hosted visual assets", () => {
    expect(portfolio.linac.steps.map((step) => step.label)).toEqual([
      "Accelerate",
      "Convert",
      "Shape",
      "Verify",
    ]);
    expect(portfolio.linac.steps).toHaveLength(4);
    expect(portfolio.linac.rfImage).toBe("/assets/linac-rf-accelerator-detail.png");
    expect(portfolio.linac.gantryImage).toBe("/assets/linac-gantry-context.png");
    expect(portfolio.linac.sourceHref).toBe("https://www.radiologyinfo.org/en/info/linac");
  });
});
