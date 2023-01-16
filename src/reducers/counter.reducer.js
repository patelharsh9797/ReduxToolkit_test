import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counterValue: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.counterValue = state.counterValue + action.payload;
    },
    decrement: (state, action) => {
      state.counterValue = state.counterValue - action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
