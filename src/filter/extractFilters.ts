import type { FeatureName, Product } from "../product/product"
import { DisplayableFilter } from "./filter"

export type extractFilterReturnType = {
  filterName: FeatureName
  filters: DisplayableFilter
}
export const extractFilters = (
  data: readonly Product[]
): extractFilterReturnType[] => {
  const displayTechnologies = [
    ...new Set(data.map((v) => v.features.displayTechnology.value)),
  ]
  const displaySizes = [
    ...new Set(data.map((v) => v.features.displaySize.value)),
  ]
  const displayResolutions = [
    ...new Set(data.map((v) => v.features.displayResolution.value)),
  ]
  return [
    {
      filterName: "displayTechnology",
      filters: {
        question: "Welche Displaytechnologie/n bevorzugen Sie?",
        values: displayTechnologies.map((tech) => ({
          label: tech,
          value: tech,
        })),
      },
    },
    {
      filterName: "displaySize",
      filters: {
        question: "Welche Bildschirmgröße/n bevorzugen Sie?",
        values: displaySizes.map((size) => ({
          label: size,
          value: size,
        })),
      },
    },
    {
      filterName: "displayResolution",
      filters: {
        question: "Welche Bildschirmauflösung/en bevorzugen Sie?",
        values: displayResolutions.map((res) => ({
          label: res.includes("3.840") ? "4K Display" : "2K Display",
          value: res,
        })),
      },
    },
  ]
}
