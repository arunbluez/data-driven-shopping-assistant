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
    const products = [
      createDummyProduct("LED", "50", "1920 x 1080"),
      createDummyProduct("OLED", "50", "1920 x 1080"),
    ];
    expect(applyFilters(products, [])).toEqual(products);
  });

  it("returns the given products for an empty filter", () => {
    const products = [
      createDummyProduct("LED", "50", "1920 x 1080"),
      createDummyProduct("OLED", "51", "1920 x 1080"),
    ];
    expect(
      applyFilters(products, [{ feature: "displayTechnology", filterFor: [] }])
    ).toEqual(products);
  });

  it("returns all products for one given displayTechnology", () => {
    const products = [
      createDummyProduct("LED", "50", "1920 x 1080"),
      createDummyProduct("OLED", "51", "1920 x 1080"),
    ];
    expect(
      applyFilters(products, [
        { feature: "displayTechnology", filterFor: ["LED"] },
      ])
    ).toEqual(products.slice(0, 1));
  });

  it("returns all products for multiple filters with multiple values", () => {
    const products = [
      createDummyProduct("LED", "50", "1920 x 1080"),
      createDummyProduct("OLED", "42", "800 x 600"),
      createDummyProduct("LED", "42", "640 x 480"),
    ];

    expect(
      applyFilters(products, [
        { feature: "displayTechnology", filterFor: ["LED", "OLED"] },
        { feature: "displaySize", filterFor: ["42"] },
        { feature: "displayResolution", filterFor: ["640 x 480", "800 x 600"] },
      ])
    ).toEqual(products.slice(1));
  });

  it("returns expected products for multiple applied filters", () => {
    const products = [
      createDummyProduct("LED", "50", "1920 x 1080"),
      createDummyProduct("OLED", "42", "800 x 600"),
      createDummyProduct("LED", "42", "640 x 480"),
    ];

    expect(
      applyFilters(products, [
        { feature: "displayTechnology", filterFor: ["LED"] },
        { feature: "displaySize", filterFor: ["42"] },
        { feature: "displayResolution", filterFor: ["640 x 480"] },
      ])
    ).toEqual(products.slice(2));
  });
});
