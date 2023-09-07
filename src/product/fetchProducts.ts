import rawProductData from "../data/products/tvs.json";
import type { Features, Product } from "./product";

export const fetchProducts = (): readonly Product[] => {
  return rawProductData.data.products.map((value) => ({
    availabilities: {
      // @ts-expect-error answers can contain online availability, but the concrete products did not all
      online: value.availabilities.online?.amount > 0,
      // @ts-expect-error answers can contain store availability, but the concrete products did not all
      store: value.availabilities.store?.amount > 0,
    },
    imageUrl: value.assets.images[0].url,
    price: value.prices.displaySalesPrice,
    name: value.customerFriendlyName,
    reviews: {
      average: value.onlineReviews.averageRating,
      count: value.onlineReviews.entries.amount,
    },
    features: extractFeatures(
      // @ts-expect-error I'm too lazy
      value.featureGroups.filter(
        (value) => value.name === "Energieverbrauchsangaben (EU 2017/1369)"
      )[0].features
    ),
    topFeatures: value.featureGroups[0].features.slice(0, 4).map((feature) => ({
      ...feature,
      value: feature.values[0].value,
    })),
  }));
};

const extractFeatures = (
  features: Array<{
    name: string;
    values: Array<{ value: string; unit: string }>;
  }>
): Features => ({
  displayTechnology: {
    name: "Displaytechnologie",
    // todo: unsafe
    value: features.filter((v) => v.name === "Verwendete Panel Technologie")[0]
      .values[0].value,
  },
  displaySize: {
    name: "Bildschirmdiagonale (Zoll)",
    value: features.filter((v) => v.name === "Bildschirmdiagonale (Zoll)")[0]
      .values[0].value,
  },
});
