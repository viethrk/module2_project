import FormRegisComponent from "../../../components/molecules/form-regis/form-regis";

const RegisComponent = (props) => {
  const regis = (userName, pass) => {
    console.log(userName);
    console.log(pass);
  };

  const login = () => {};

  return (
    <FormRegisComponent
      titleLogin="Tên đăng nhâp"
      titlePassword="Mật khẩu"
      submit={regis}
      login={login}
    />
  );
};

export default RegisComponent;
