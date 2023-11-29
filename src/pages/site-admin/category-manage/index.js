import { useEffect, useRef, useState } from "react";
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

  const getCategoryUpdate = async (id) => {
    const categoryUpdate = await getCategoryById(id);
    setTextBtn(BUTTON_TEXT.UPDATE);
    setInputId(categoryUpdate.id);
    setInputName(categoryUpdate.name);
  };

  const addOrUpdateCategory = async () => {
    if (textBtn == BUTTON_TEXT.ADD) {
      const newCategory = {
        name: inputName, // nameRef.current.value
      };
    } else {
      const update = {
        id: inputId, // idRef.current.value
        name: inputName, // nameRef.current.value
      };
      setTextBtn(BUTTON_TEXT.ADD);
    }

    init();
    setInputId("");
    setInputName("");
  };

  const onClickDel = async (id) => {
    // call API del category
    // sau khi xoa thanh cong, goi lai API get list category de hien thi
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
                clickUpdate={getCategoryUpdate}
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
