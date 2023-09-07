import { FeatureName } from "../product/product"

export type DisplayableFilter = {
  question: string
  values: readonly DisplayFilterValueType[]
}

export type DisplayFilterValueType = {
  label: string
  value: string
}

export type ApplyableFilter = {
  feature: FeatureName
  filterFor: readonly string[]
}
