export type Product = {
  name: string;
  imageUrl: string;
  reviews: ReviewData;
  price: Price;
  features: Features;
  availabilities: Availabilities;
  topFeatures: Feature[];
};

type Price = {
  value: number;
  currency: string;
};

type ReviewData = {
  average: number;
  count: number;
};

export type FeatureName =
  | "displayTechnology"
  | "displaySize"
  | "displayResolution";

export type Features = Record<FeatureName, Feature>;

export type Feature = {
  name: string;
  value: string;
};

type Availabilities = {
  online: boolean;
  store: boolean;
};
