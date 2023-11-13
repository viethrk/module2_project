import { useEffect, useRef, useState } from "react";
import {
  addCategory,
  getCategory,
  initCategorys,
  updateCategory,
} from "../../../services/admin/category-service";
import { BUTTON_TEXT } from "../../../constants/commont-const";
import CategoryComponent from "./category";

const CategoryManageComponent = (props) => {
  // khai bao state
  const [categorysState, setCategorysState] = useState([]);
  const [textBtn, setTextBtn] = useState(BUTTON_TEXT.ADD);

  // cach 1
  const [inputId, setInputId] = useState("");
  const [inputName, setInputName] = useState("");

  // cach 2
  const idRef = useRef("");
  const nameRef = useRef("");

  // effect component
  useEffect(() => {
    // lay categorys
    let categorys = getCategory();
    if (categorys.length == 0) {
      initCategorys();
      categorys = getCategory();
    }

    setCategorysState(categorys);
  }, []);

  // component event
  const clickUpdate = (id) => {
    setTextBtn(BUTTON_TEXT.UPDATE);
  };

  const addOrUpdateCategory = () => {
    if (textBtn == BUTTON_TEXT.ADD) {
      const newCategory = {
        id: inputId, // idRef.current.value
        name: inputName, // nameRef.current.value
      };
      const cateAfterAdd = addCategory(newCategory);
      setCategorysState(cateAfterAdd);
    } else {
      // updateCategory;
    }
  };

  return (
    <div>
      <div>
        <input
          // cach 2
          ref={idRef}
          // cach 1
          value={inputId}
          onChange={(event) => setInputId(event.target.value)}
        ></input>
        <input
          // cach 2
          ref={nameRef}
          // cach 1
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
        ></input>
        <button onClick={addOrUpdateCategory}>{textBtn}</button>
      </div>
      <div>
        {categorysState.map((category) => {
          return (
            <>
              <CategoryComponent id={category.id} name={category.name} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryManageComponent;
