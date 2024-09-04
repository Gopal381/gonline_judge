import { createSlice } from "@reduxjs/toolkit";
export const problemSlice = createSlice({
  name: "problem",
  initialState: [],
  reducers: {
    addProblem: (state, action) => {
      return action.payload;
    },
    pushProblem: (state, action) => {
      state.push(action.payload);
    },
    updateProblem: (state, action) => {
      return state.map((problem) =>
        problem._id === action.payload._id
          ? { ...problem, ...action.payload }
          : problem
      );
    },
    removeProblem: (state, action) => {
      return [];
    },
  },
});

export const { addProblem, removeOneProblem, updateProblem, pushProblem } =
  problemSlice.actions;
export default problemSlice.reducer;
