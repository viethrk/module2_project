import { useContext } from "react";
import FormRegisComponent from "../../../components/molecules/form-regis/form-regis";
import { MENU_URL } from "../../../constants/commont-const";
import { MenuContext } from "../../../contexts/define-context";

const RegisComponent = (props) => {
  const menuConext = useContext(MenuContext);
  const { setPageShow } = menuConext;
  const regis = (userName, pass) => {
    console.log(userName);
    console.log(pass);
  };

  const login = () => {
    setPageShow(MENU_URL.CUSTOMER.LOGIN);
  };

  return (
    <FormRegisComponent
      titleLogin="Tên đăng nhâp"
      titlePassword="Mật khẩu"
      submit={regis}
      login={login}
    />
  );
};

export default RegisComponent;
