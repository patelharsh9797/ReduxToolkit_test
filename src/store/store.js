import { configureStore } from "@reduxjs/toolkit";

// TODO importing the reducers slices
import userReducer from "../reducers/user.reducer";
import counterReducer from "../reducers/counter.reducer";
import sampleReducer from "../reducers/sample.reducer";

// TODO Creating the store
const store = configureStore({
  reducer: {
    userInfo: userReducer,
    counterInfo: counterReducer,
    sampleBoiii: sampleReducer,
  },
});

export default store;
