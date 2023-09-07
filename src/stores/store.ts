import { create } from "zustand";
import { createQuestionSlice, QuestionSlice } from "./questions.store";

export const useBoundStore = create<QuestionSlice>()((...a) => ({
  ...createQuestionSlice(...a),
}));
