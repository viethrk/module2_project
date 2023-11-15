// react
import { useMemo, useState } from "react";

// orther lib

// context
import { MenuContext } from "./define-context";

// constant
import { MENU_URL } from "../constants/commont-const";

// component

const MenuContextComponent = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <MenuContext.Provider value={{ isLogin, setIsLogin }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuContextComponent;
