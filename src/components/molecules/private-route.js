import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { MenuContext } from "../../contexts/define-context";
import AdminRoute from "../../routes/admin-route";
import { MENU_URL } from "../../constants/commont-const";

const Private = () => {
  const menu = useContext(MenuContext);
  const { isLogin } = menu;

  return isLogin ? <AdminRoute /> : <Navigate to={MENU_URL.ADMIN.LOGIN} />;
};

export default Private;
