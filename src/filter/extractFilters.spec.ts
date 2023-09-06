import { describe, it, expect } from "vitest";
import { extractFilters } from "./extractFilters";

describe("extractFilters", () => {
  describe("empty products", () => {
    it("returns all filters without possible values", () => {
      expect(extractFilters([])).toStrictEqual({
        displayTechnology: {
          question: "Welche Displaytechnologie/n bevorzugen Sie?",
          values: [],
        },
      });
    });
  });
});
