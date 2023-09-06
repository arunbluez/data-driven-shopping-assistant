import type { Product } from "../product/product";
import { Filter, FilterType } from "./filter";

export const extractFilters = (
  data: readonly Product[]
): Record<FilterType, Filter> => {
  const displayTechnologies = [
    ...new Set(
      data.map(
        // todo: unsafe
        (v) =>
          v.features.filter((f) => f.name === "Displaytechnologie")[0].value
      )
    ),
  ];
  return {
    displayTechnology: {
      question: "Welche Displaytechnologie/n bevorzugen Sie?",
      values: displayTechnologies,
    },
  };
};
