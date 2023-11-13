// dung de hien thi 1 category
const CategoryComponent = (props) => {
  const { id, name, clickUpdate, clickDel } = props;
  return (
    <div className="d-flex justify-content-between">
      <div>{id}</div>
      <div>{name}</div>
      <div>
        <button onClick={() => clickUpdate(id)}>Update</button>
        <button onClick={() => clickDel(id)}>Edit</button>
      </div>
    </div>
  );
};

export default CategoryComponent;
