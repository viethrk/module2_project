import { Button } from "react-bootstrap";

// dung de hien thi 1 category
const CategoryComponent = (props) => {
  const { id, name, clickUpdate, clickDel } = props;
  return (
    <div className="d-flex justify-content-between mb-2">
      <div className="col-2">{id}</div>
      <div className="col-10 d-flex justify-content-between">
        <div>{name}</div>
        <div>
          <Button variant="warning" onClick={() => clickUpdate(id)}>
            Update
          </Button>
          <Button
            className="ms-2"
            variant="danger"
            onClick={() => clickDel(id)}
          >
            Del
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryComponent;
