import type { FeatureName, Product } from "../product/product";
import { DisplayFilterValueType, DisplayableFilter } from "./filter";

export type extractFilterReturnType = {
  filterName: FeatureName;
  filters: DisplayableFilter;
};
export const extractFilters = (
  data: readonly Product[]
): extractFilterReturnType[] => {
  const displayTechnologies = [
    ...new Set(data.map((v) => v.features.displayTechnology.value)),
  ];
  const displaySizes = [
    ...new Set(data.map((v) => v.features.displaySize.value)),
  ];
  const displayResolutions = [
    ...new Set(data.map((v) => v.features.displayResolution.value)),
  ];
  return [
    {
      filterName: "displayTechnology",
      filters: {
        question: "Which display technology/s do you prefer?",
        values: displayTechnologies.map((tech) => ({
          label: tech,
          value: tech,
        })),
      },
    },
    {
      filterName: "displaySize",
      filters: {
        question: "Which screen size/s do you prefer?",
        values: displaySizes.map((size) => ({
          label: size,
          value: size,
        })),
      },
    },
    {
      filterName: "displayResolution",
      filters: {
        question: "Which screen resolution/s do you prefer?",
        values: displayResolutions.map((res) => ({
          label: res.includes("3.840") ? "4K Display" : "2K Display",
          value: res,
        })),
      },
    },
  ];
};

export const extractFilter = (
  data: readonly Product[],
  feature: FeatureName
): extractFilterReturnType => {
  const values = [
    ...new Set(data.map((v) => v.features[feature].value)),
  ].sort();
  const labelFunction = (value: string): DisplayFilterValueType => {
    if (feature === "displayResolution") {
      return {
        label: value.includes("3.840") ? "4K Display" : "2K Display",
        value,
      };
    } else if (feature === "displaySize") {
      return {
        label: `${value} Zoll`,
        value,
      };
    } else {
      return {
        label: value,
        value,
      };
    }
  };
  return {
    filterName: feature,
    filters: {
      question: featureToQuestion[feature],
      values: values.map(labelFunction),
    },
  };
};

const featureToQuestion: Record<FeatureName, string> = {
  displayResolution: "Which screen resolution/s do you prefer?",
  displaySize: "Which screen size/s do you prefer?",
  displayTechnology: "Which display technology/s do you prefer?",
};
