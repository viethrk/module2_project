import { Route, Routes } from "react-router-dom";
import AdminMenu from "../components/organisms/menu/admin-menu";
import React from "react";
import { MENU_URL } from "../constants/commont-const";
const CategoryManageComponent = React.lazy(() =>
  import("../pages/site-admin/category-manage")
);

const AdminRoute = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-dark min-height-100vh">
          <AdminMenu />
        </div>
        <main className="col-10">
          <Routes>
            <Route
              path="/category"
              element={
                <React.Suspense>
                  <CategoryManageComponent />
                </React.Suspense>
              }
            />
            <Route
              path="/orders"
              element={
                <React.Suspense>
                  <CategoryManageComponent />
                </React.Suspense>
              }
            />
            <Route
              path={MENU_URL.ADMIN.PRO_MANAGE}
              element={
                <React.Suspense>
                  <CategoryManageComponent />
                </React.Suspense>
              }
            />
            <Route
              path="/customers"
              element={
                <React.Suspense>
                  <CategoryManageComponent />
                </React.Suspense>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminRoute;
