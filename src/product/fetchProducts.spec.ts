import { describe, it, expect } from "vitest"
import type { Product } from "./product"
import { fetchProducts } from "./fetchProducts"

describe("fetchProducts", () => {
  const products = fetchProducts()

  it("contains all products", () => {
    expect(products).toHaveLength(3)
  })

  it.each(expectedProducts)(
    "contains well formed product $id",
    ({ expectedProduct }) => {
      expect(products).toContainEqual(expectedProduct)
    }
  )
})

const expectedProducts: Array<{
  id: string
  expectedProduct: Product
}> = [
  {
    id: "2863142",
    expectedProduct: {
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
      features: {
        displayTechnology: {
          name: "Displaytechnologie",
          value: "LED",
        },
      },
      topFeatures: [
        {
          name: "SMART TV",
          value: "Ja",
        },
        {
          name: "Bildschirmdiagonale (cm/Zoll)",
          value: "138 cm / 55 Zoll",
        },
        {
          name: "Betriebssystem",
          value: "Tizen",
        },
        {
          name: "Abmessungen ohne Standfuß (BxHxT)",
          value: "1230.5 mm / 707.2 mm / 59.9 mm",
        },
      ],
    },
  },
  {
    id: "2851393",
    expectedProduct: {
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
      features: {
        displayTechnology: {
          name: "Displaytechnologie",
          value: "LED",
        },
      },
      topFeatures: [
        {
          name: "SMART TV",
          value: "Ja",
        },
        {
          name: "Bildschirmdiagonale (cm/Zoll)",
          value: "100 cm / 40 Zoll",
        },
        {
          name: "Betriebssystem",
          value: "Google TV",
        },
        {
          name: "Abmessungen ohne Standfuß (BxHxT)",
          value: "892.3 mm / 512.8 mm / 86.7 mm",
        },
      ],
    },
  },
  {
    id: "2788190",
    expectedProduct: {
      availabilities: {
        online: true,
        store: false,
      },
      imageUrl: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92324703",
      price: {
        value: 888,
        currency: "EUR",
      },
      name: "LG OLED48C27LA OLED TV (Flat, 48 Zoll / 121 cm, UHD 4K, SMART TV, webOS 22 mit LG ThinQ)",
      reviews: {
        average: 4.462962962962963,
        count: 54,
      },
      features: {
        displayTechnology: {
          name: "Displaytechnologie",
          value: "OLED",
        },
      },
      topFeatures: [
        {
          name: "SMART TV",
          value: "Ja",
        },
        {
          name: "Bildschirmdiagonale (cm/Zoll)",
          value: "100 cm / 40 Zoll",
        },
        {
          name: "Betriebssystem",
          value: "Google TV",
        },
        {
          name: "Abmessungen ohne Standfuß (BxHxT)",
          value: "892.3 mm / 512.8 mm / 86.7 mm",
        },
      ],
    },
  },
]
