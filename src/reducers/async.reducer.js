import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadJoke } from "../actions/async.action";
import axios from "axios";

const url = "https://official-joke-api.appspot.com/random_joke";

export const getJoke = createAsyncThunk("asyncCall/getJoke", async () => {
  const res = await axios.get(url);
  return res.data;
});

const asyncSlice = createSlice({
  name: "asyncCall",
  initialState: { loading: false },
  //   reducers: {
  //     loadJOKE: async (state) => {
  //       const jokeData = await axios.get(url);
  //       return { ...state, jokeData };
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(getJoke.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getJoke.fulfilled, (state, action) => {
      return { ...state, ...action.payload, loading: false };
    });
    builder.addCase(getJoke.rejected, (state, action) => {
      return { ...state, loading: false, ...action.payload };
    });
  },
});

export const { loadJOKE } = asyncSlice.actions;
export default asyncSlice.reducer;
