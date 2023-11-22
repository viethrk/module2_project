import { Navigate, Outlet } from "react-router-dom";
import AdminRoute from "../../routes/admin-route";
import { MENU_URL } from "../../constants/commont-const";
import { useSelector } from "react-redux";

const Private = () => {
  const isLogin = useSelector((state) => state.isLoginState);

  return isLogin ? <AdminRoute /> : <Navigate to={MENU_URL.ADMIN.LOGIN} />;
};

export default Private;
