import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// TODO importing the reducers slices
import userReducer from "../reducers/user.reducer";
import counterReducer from "../reducers/counter.reducer";
import sampleReducer from "../reducers/sample.reducer";
import asyncReducer from "../reducers/async.reducer";

// TODO Creating the store
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    counterInfo: counterReducer,
    sampleBoiii: sampleReducer,
    jokeData: asyncReducer,
  },
  middleware: [thunk],
});

export default store;
