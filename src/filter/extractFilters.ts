import { Filter, FilterType } from "./filter";

export const extractFilters = (
  data: readonly Product[]
): Record<FilterType, Filter> => {
  return {
    displayTechnology: {
      question: "Welche Displaytechnologie/n bevorzugen Sie?",
      values: [],
    },
  };
};
