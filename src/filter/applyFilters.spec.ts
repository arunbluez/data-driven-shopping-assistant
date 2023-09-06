import { describe, it, expect } from "vitest";
import { applyFilters } from "./applyFilters";
import { createDummyProduct } from "./extractFilters.spec";

describe("applyFilters", () => {
  describe("with empty products", () => {
    it("returns empty products", () => {
      expect(applyFilters([], [])).toHaveLength(0);
      expect(
        applyFilters([], [{ feature: "displayTechnology", filterFor: ["LED"] }])
      );
    });
  });

  it("returns the given products for no filters", () => {
    const products = [createDummyProduct("LED"), createDummyProduct("OLED")];
    expect(applyFilters(products, [])).toEqual(products);
  });

  it("returns the given products for an empty filter", () => {
    const products = [createDummyProduct("LED"), createDummyProduct("OLED")];
    expect(
      applyFilters(products, [{ feature: "displayTechnology", filterFor: [] }])
    ).toEqual(products);
  });

  it("returns all products for one given displayTechnology", () => {
    const products = [createDummyProduct("LED"), createDummyProduct("OLED")];
    expect(
      applyFilters(products, [
        { feature: "displayTechnology", filterFor: ["LED"] },
      ])
    ).toEqual(products.slice(0, 1));
  });
});
