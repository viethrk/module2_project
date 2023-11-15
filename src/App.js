import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponent from "./routes/routes";
import HeaderComponent from "./components/organisms/header";
import MenuContextComponent from "./contexts/menu-context";

function App() {
  return (
    <MenuContextComponent>
      <RouteComponent />
    </MenuContextComponent>
  );
}

export default App;
