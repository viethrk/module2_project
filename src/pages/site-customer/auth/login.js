import { useContext } from "react";
import FormLoginComponent from "../../../components/molecules/form-login/form-login";
import { MenuContext } from "../../../contexts/define-context";
import { MENU_URL } from "../../../constants/commont-const";
import { useNavigate } from "react-router-dom";

const LoginComponent = (props) => {
  const menu = useContext(MenuContext);
  const { setIsLogin } = menu;
  const navigate = useNavigate();
  const login = (userName, pass) => {
    // kiem tra logic login
    setIsLogin(true);
    navigate("/products");
    // Link to={}
    // NavLink to={}
  };

  const regis = () => {};

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
