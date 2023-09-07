import { StateCreator } from "zustand"
import { DisplayableFilter } from "../filter/filter"

export interface QuestionSlice {
  selectedState: DisplayableFilter[][]
  setSelectedState: (input: DisplayableFilter[], index: number) => void
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
})
