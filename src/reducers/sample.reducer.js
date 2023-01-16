import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return action.payload ? state + action.payload : state + 1;
    },
    decrement: (state, action) => {
      return action.payload ? state - action.payload : state - 1;
    },
  },
});

export const { increment, decrement } = sampleSlice.actions;
export default sampleSlice.reducer;
