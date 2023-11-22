import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./reducer/login-reducer";

export default configureStore({
  reducer: {
    isLoginState: loginReducer,
  },
});
