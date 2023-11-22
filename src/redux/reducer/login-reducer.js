import { createSlice } from "@reduxjs/toolkit";

const loginReducer = createSlice({
  name: "check login status",
  initialState: false,
  reducers: {
    isLogined: () => {
      return true;
    },
  },
});

export const { isLogined } = loginReducer.actions;
export default loginReducer.reducer;
