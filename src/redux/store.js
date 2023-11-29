import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./reducer/loading-reducer";
import loginReducer from "./reducer/login-reducer";

export default configureStore({
  reducer: {
    isLoginState: loginReducer,
    loadingState: loadingReducer,
  },
});
