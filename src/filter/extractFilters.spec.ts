import { describe, it, expect } from "vitest";
import { extractFilters } from "./extractFilters";
import { Product } from "../product/product";

describe("extractFilters", () => {
  describe("empty products", () => {
    it("returns all filters without possible values", () => {
      expect(extractFilters([])).toEqual({
        displayTechnology: {
          question: "Welche Displaytechnologie/n bevorzugen Sie?",
          values: [],
        },
      });
    });

    it("returns displayTechnology filter with all possible distinct values in the given products", () => {
      const given: readonly Product[] = [
        createDummyProduct("OLED"),
        createDummyProduct("LCD"),
        createDummyProduct("LCD"),
        createDummyProduct("QLED"),
      ];

      const filters = extractFilters(given);

      expect(filters.displayTechnology.values).toEqual(["OLED", "LCD", "QLED"]);
    });
  });
});

export const createDummyProduct = (displayTechnology: string): Product => ({
  availabilities: {
    store: false,
    online: false,
  },
  features: {
    displayTechnology: {
      name: "Displaytechnologie",
      value: displayTechnology,
    },
  },
  imageUrl: "foo",
  name: "Fake Product",
  price: {
    value: 0,
    currency: "EUR",
  },
  reviews: {
    average: 5,
    count: 9001,
  },
});
