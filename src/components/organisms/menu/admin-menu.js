import { NavLink } from "react-router-dom";
import { MENU_URL } from "../../../constants/commont-const";

const AdminMenu = () => {
  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-link activated" : "nav-link";
  };
  return (
    <>
      <h2 className="my-3 text-white">Company name</h2>
      <div className="pt-3">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <NavLink to="/" className={navLinkClass}>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/orders" className={navLinkClass}>
              Orders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={MENU_URL.ADMIN.PRO_MANAGE} className={navLinkClass}>
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/customers" className={navLinkClass}>
              Customers
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminMenu;
