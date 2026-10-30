// reducers/authReducer.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null; // Hapus user juga jika diperlukan
    },
  },
});

export const { setToken, setUser, logout } = authSlicer.actions;

export default authSlicer.reducer;