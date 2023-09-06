import rawProductData from "../data/products/tvs-extended.json";
import type { Feature, Product } from "./product";

export const fetchProducts = (): readonly Product[] => {
  return rawProductData.data.products.map((value) => ({
    availabilities: {
      online: value.availabilities.online?.amount > 0,
      // @ts-expect-error answers can contain store availability, but the concrete products did not
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
  }));
};

const extractFeatures = (
  features: Array<{
    name: string;
    values: Array<{ value: string; unit: string }>;
  }>
): Feature[] => {
  return [
    {
      name: "Displaytechnologie",
      value: features.filter(
        (v) => v.name === "Verwendete Panel Technologie"
      )[0].values[0].value,
    },
  ];
};
