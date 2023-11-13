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
import CategoryManageComponent from "../pages/site-admin/category-manage";
import HeaderComponent from "../components/organisms/header";
import FooterComponent from "../components/organisms/footer";

const MenuContextComponent = (props) => {
  const [pageShow, setPageShow] = useState(MENU_URL.CUSTOMER.LOGIN);

  const memoRender = useMemo(() => {
    switch (window.location.pathname) {
      case MENU_URL.ADMIN.CATEGORY_MANAGE:
        return <CategoryManageComponent />;
      case MENU_URL.CUSTOMER.LOGIN:
        return <AdminLoginComponent />;
      case MENU_URL.CUSTOMER.REGIS:
        return <RegisComponent />;
      default:
        return <AdminLoginComponent />;
    }
  }, [window.location.pathname]);

  return (
    <MenuContext.Provider value={{ setPageShow }}>
      <HeaderComponent />
      <div className="d-flex align-items-center justify-content-center">
        {memoRender}
      </div>
      <FooterComponent />
    </MenuContext.Provider>
  );
};

export default MenuContextComponent;
