import { StateCreator } from "zustand"
import { ApplyableFilter } from "../filter/filter"

export interface QuestionSlice {
  selectedState: ApplyableFilter[]
  setSelectedState: (input: ApplyableFilter, index: number) => void
  resetSelectedState: () => void
}

export const createQuestionSlice: StateCreator<QuestionSlice> = (set) => ({
  selectedState: [],
  setSelectedState: (input, index) =>
    set((state) => {
      const newState = [...state.selectedState]
      newState[index] = input
      return {
        selectedState: newState,
      }
    }),
  resetSelectedState: () =>
    set(() => ({
      selectedState: [],
    })),
})
