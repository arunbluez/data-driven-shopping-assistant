import { create } from "zustand";
import { ApplyableFilter } from "../filter/filter";
import { fetchProducts } from "../product/fetchProducts";
import { applyFilters } from "../filter/applyFilters";
import { Product } from "../product/product";

const initialProducts = fetchProducts();
const initialFilters: readonly ApplyableFilter[] = [];
const initialStep = 0;

type State = {
  currentStep: number;
  filtersToApply: readonly ApplyableFilter[];
  currentProducts: readonly Product[];
};

type Action = {
  addFilter: (filter: ApplyableFilter) => void;
  removeFilter: () => void;
  reset: () => void;
};

export const useStore = create<State & Action>((set) => ({
  currentStep: initialStep,
  currentProducts: initialProducts,
  filtersToApply: initialFilters,
  reset: () =>
    set(() => ({
      currentProducts: initialProducts,
      filtersToApply: initialFilters,
      currentStep: initialStep,
    })),
  addFilter: (filter) =>
    set((state) => {
      const newFilters = [...state.filtersToApply];
      newFilters[state.currentStep] = filter;
      console.log(`new filters: ${JSON.stringify(newFilters)}`);
      const newProducts = applyFilters(initialProducts, newFilters);
      console.log(`length of initial products: ${initialProducts.length}`);
      console.log(`length of new products: ${newProducts.length}`);
      return {
        currentStep: state.currentStep + 1,
        filtersToApply: newFilters,
        currentProducts: newProducts,
      };
    }),
  removeFilter: () =>
    set((state) => {
      const newFilters = state.filtersToApply.filter(
        (_value, index) => index !== state.currentStep - 1
      );
      console.log(`new filters: ${JSON.stringify(newFilters)}`);
      const newProducts = applyFilters(initialProducts, newFilters);
      console.log(`length of initial products: ${initialProducts.length}`);
      console.log(`length of new products: ${newProducts.length}`);
      return {
        currentStep: state.currentStep - 1,
        filtersToApply: newFilters,
        currentProducts: newProducts,
      };
    }),
}));
