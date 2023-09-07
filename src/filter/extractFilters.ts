import type { FeatureName, Product } from "../product/product";
import { DisplayableFilter } from "./filter";

export const extractFilters = (
  data: readonly Product[]
): Record<FeatureName, DisplayableFilter> => {
  const displayTechnologies = [
    ...new Set(data.map((v) => v.features.displayTechnology.value)),
  ];
  const displaySizes = [
    ...new Set(data.map((v) => v.features.displaySize.value)),
  ];
  const displayResolutions = [
    ...new Set(data.map((v) => v.features.displayResolution.value)),
  ];
  return {
    displayTechnology: {
      question: "Welche Displaytechnologie/n bevorzugen Sie?",
      values: displayTechnologies,
    },
    displaySize: {
      question: "Welche Bildschirmgröße/n bevorzugen Sie?",
      values: displaySizes,
    },
    displayResolution: {
      question: "Welche Bildschirmauflösung/en bevorzugen Sie?",
      values: displayResolutions,
    },
  };
};
