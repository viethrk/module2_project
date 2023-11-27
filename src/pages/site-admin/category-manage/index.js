import { useEffect, useRef, useState } from "react";
import {
  addCategory,
  delCategory,
} from "../../../services/admin/category-service";
import { BUTTON_TEXT } from "../../../constants/commont-const";
import CategoryComponent from "./category";
import { Button, Form } from "react-bootstrap";
import { getCategories, getCategoryById } from "../../../api/category-api";

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
    init();
  }, []);

  const init = async () => {
    // lay categorys
    const categorys = await getCategories();

    setCategorysState(categorys);
  };

  const updateCategory = async (id) => {
    const categoryUpdate = await getCategoryById(id);
    setTextBtn(BUTTON_TEXT.UPDATE);
    setInputId(categoryUpdate.id);
    setInputName(categoryUpdate.name);
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
      const update = {
        id: inputId, // idRef.current.value
        name: inputName, // nameRef.current.value
      };
      const cateAfterUpdate = updateCategory(update);
      setCategorysState(cateAfterUpdate);
      setTextBtn(BUTTON_TEXT.ADD);
    }

    setInputId("");
    setInputName("");
  };

  const onClickDel = (id) => {
    setCategorysState(delCategory(id));
  };

  return (
    <div className="pt-5 container col-8">
      <div className="d-flex mb-2">
        <Form.Control
          // cach 2
          ref={nameRef}
          // cach 1
          value={inputName}
          onChange={(event) => setInputName(event.target.value)}
          className="me-2"
        />
        <Button variant="primary" onClick={addOrUpdateCategory}>
          {textBtn}
        </Button>
      </div>
      <div>
        {categorysState.map((category) => {
          return (
            <>
              <CategoryComponent
                id={category.id}
                name={category.name}
                clickUpdate={updateCategory}
                clickDel={onClickDel}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryManageComponent;
