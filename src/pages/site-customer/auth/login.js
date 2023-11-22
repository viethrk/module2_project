import FormLoginComponent from "../../../components/molecules/form-login/form-login";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogined } from "../../../redux/reducer/login-reducer";

const LoginComponent = (props) => {
  const isLogin = useSelector((state) => state.isLoginState);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const login = (userName, pass) => {
    // kiem tra logic login
    dispath(isLogined());
    navigate("/products");
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
