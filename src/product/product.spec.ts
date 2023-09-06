import { describe, it, expect } from "vitest";
import { fetchProducts } from "./product";

describe("fetchProducts", () => {
  it("returns a list of well-formed products", () => {
    // todo: expect our fix set of products in a well formed way.
    const products = fetchProducts();
    expect(products).toHaveLength(2);

    expect(products).toContainEqual({
      availabilities: {
        online: true,
        store: false,
      },
      imageUrl: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105413335",
      price: {
        value: 519.99,
        currency: "EUR",
      },
      name: "SAMSUNG GU55CU7179 LED TV (Flat, 55 Zoll / 138 cm, UHD 4K, SMART TV, Tizen)",
      reviews: {
        average: 4.290322580645161,
        count: 31,
      },
      features: [
        {
          name: "Displaytechnologie",
          value: "LED",
        },
      ],
    });

    expect(products).toContainEqual({
      availabilities: {
        online: true,
        store: false,
      },
      imageUrl: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_107659645",
      price: {
        value: 219,
        currency: "EUR",
      },
      name: "OK. OTV 40GF-5023C LCD TV (Flat, 40 Zoll / 100 cm, Full-HD, SMART TV, Google TV)",
      reviews: {
        average: 4.181818181818182,
        count: 11,
      },
      features: [
        {
          name: "Displaytechnologie",
          value: "LED",
        },
      ],
    });
  });
});
