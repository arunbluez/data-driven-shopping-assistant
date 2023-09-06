import { Product } from "../product/product";
import { ApplyableFilter } from "./filter";

export const applyFilters = (
  products: readonly Product[],
  filters: ApplyableFilter[]
): readonly Product[] =>
  products.filter((p) => filters.every((f) => applyFilter(p, f)));

const applyFilter = (product: Product, filter: ApplyableFilter): boolean =>
  filter.filterFor.length == 0 ||
  filter.filterFor.includes(product.features[filter.feature].value);
