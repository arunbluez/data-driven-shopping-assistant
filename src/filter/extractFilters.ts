import type { FeatureName, Product } from "../product/product";
import { Filter } from "./filter";

export const extractFilters = (
  data: readonly Product[]
): Record<FeatureName, Filter> => {
  const displayTechnologies = [
    ...new Set(data.map((v) => v.features.displayTechnology.value)),
  ];
  return {
    displayTechnology: {
      question: "Welche Displaytechnologie/n bevorzugen Sie?",
      values: displayTechnologies,
    },
  };
};
