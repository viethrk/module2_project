import FormLoginComponent from "../../../components/molecules/form-login/form-login";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogined } from "../../../redux/reducer/login-reducer";
import { toggleLoading } from "../../../redux/reducer/loading-reducer";
import { useState } from "react";

const LoginComponent = (props) => {
  const isLogin = useSelector((state) => state.isLoginState);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const login = (userName, pass) => {
    dispath(toggleLoading(123));
    setTimeout(() => {
      dispath(toggleLoading(false));
      dispath(isLogined());
      navigate("/products");
    }, 3000);
    // kiem tra logic login
    // Link to={}
    // NavLink to={}
  };

  const regis = () => {};

  if (isLogin) {
    return <Navigate to="/products" />;
  }
  return (
    <FormLoginComponent
      titleLogin="Tên đăng nhâp"
      titlePassword="Mật khẩu"
      submit={login}
      regis={regis}
    />
  );
};

export default LoginComponent;
