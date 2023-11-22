import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Private from "../components/molecules/private-route";
import { MENU_URL } from "../constants/commont-const";
const LoginComponent = React.lazy(() =>
  import("../pages/site-customer/auth/login")
);

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={MENU_URL.ADMIN.LOGIN}
          element={
            <React.Suspense>
              <LoginComponent />
            </React.Suspense>
          }
        />
      </Routes>
      <Private />
    </BrowserRouter>
  );
};

export default RouteComponent;
