import { useContext } from "react";
import FormLoginComponent from "../../../components/molecules/form-login/form-login";
import { MenuContext } from "../../../contexts/define-context";
import { MENU_URL } from "../../../constants/commont-const";

const AdminLoginComponent = (props) => {
  const menuConext = useContext(MenuContext);
  const { setPageShow } = menuConext;
  const login = (userName, pass) => {};

  const regis = () => {
    setPageShow(MENU_URL.CUSTOMER.REGIS);
  };

  return (
    <FormLoginComponent
      titleLogin="Tên đăng nhâp"
      titlePassword="Mật khẩu"
      submit={login}
      regis={regis}
    />
  );
};

export default AdminLoginComponent;
