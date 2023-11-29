import { createSlice } from "@reduxjs/toolkit";

const loadingReduer = createSlice({
  name: "loading xoay xoay cho vui", // mo ta ve state
  initialState: false,
  reducers: {
    toggleLoading: (state, action) => {
      const { payload } = action;
      console.log("payload: ", action);
      return !!payload;
    },
  },
});

export const { toggleLoading } = loadingReduer.actions;
export default loadingReduer.reducer;
