export type FilterType = "displayTechnology";

export type Filter = {
  question: string;
  values: readonly FilterValue[];
};

export type FilterValue = {
  displayValue: string;
  value: string;
};
