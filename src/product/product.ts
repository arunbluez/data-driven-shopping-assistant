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

export type Feature = {
  name: FeatureName;
  value: string;
};

type Availabilities = {
  online: boolean;
  store: boolean;
};
