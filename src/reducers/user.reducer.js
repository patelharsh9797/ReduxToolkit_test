import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    isLogged: false,
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      state.isLogged = true;
    },
    logout: (state) => {
      state.username = "";
      state.isLogged = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
