import { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormLoginComponent = (props) => {
  // ===========props===========
  const { titleLogin, titlePassword, submit, regis } = props;

  // ===========state - start===========
  // khai bao state
  const [state, setState] = useState();
  // ===========state - end===========

  // ===========ref===========
  // khai bao ref
  const userRef = useRef("");
  const passwordRef = useRef("");

  // effect

  // xu ly event
  const onSubmit = () => {
    if (!submit) return;
    // userRef.current <=> document.getElementById()
    submit(userRef.current.value, passwordRef.current.value);
  };

  return (
    <Container bsPrefix="col-5">
      <div className="mb-3">
        <Form.Label htmlFor="exampleInputEmail1" className="form-label">
          {titleLogin}
        </Form.Label>
        <Form.Control
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={userRef}
        />
      </div>
      <div className="mb-3">
        <Form.Label htmlFor="exampleInputPassword1" className="form-label">
          {titlePassword}
        </Form.Label>
        <Form.Control
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          ref={passwordRef}
        />
      </div>
      <div className="d-flex justify-content-between">
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <Link to={"/regis"}>Regis now</Link>
      </div>
      <Button variant="primary" onClick={onSubmit}>
        Submit
      </Button>
    </Container>
  );
};

export default FormLoginComponent;
