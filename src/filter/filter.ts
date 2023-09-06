import { FeatureName } from "../product/product";

export type DisplayableFilter = {
  question: string;
  values: readonly string[];
};

export type ApplyableFilter = {
  feature: FeatureName;
  filterFor: readonly string[];
};
