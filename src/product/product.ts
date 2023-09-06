import rawProductData from "../data/products/tvs-extended.json";

export type Product = {
  name: string;
  imageUrl: string;
  reviews: ReviewData;
  price: Price;
  features: readonly Feature[];
  availabilities: Availabilities;
};

type Price = {
  value: number;
  currency: string;
};

type ReviewData = {
  average: number;
  count: number;
};

export type FeatureName = "Displaytechnologie";

type Feature = {
  name: FeatureName;
  value: string;
};

type Availabilities = {
  online: boolean;
  store: boolean;
};

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
