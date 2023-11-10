// react
import { useMemo, useState } from "react";

// orther lib

// context
import { MenuContext } from "./define-context";

// constant
import { MENU_URL } from "../constants/commont-const";

// component
import AdminLoginComponent from "../pages/site-customer/auth/login";
import RegisComponent from "../pages/site-customer/account/regis";

const MenuContextComponent = (props) => {
  const [pageShow, setPageShow] = useState(MENU_URL.CUSTOMER.LOGIN);

  const memoRender = useMemo(() => {
    switch (pageShow) {
      case MENU_URL.CUSTOMER.LOGIN:
        return <AdminLoginComponent />;
      case MENU_URL.CUSTOMER.REGIS:
        return <RegisComponent />;
      default:
        return <AdminLoginComponent />;
    }
  }, [pageShow]);
  return (
    <MenuContext.Provider value={{ setPageShow }}>
      <div className="d-flex min-vh-100 align-items-center justify-content-center">
        {memoRender}
      </div>
    </MenuContext.Provider>
  );
};

export default MenuContextComponent;
