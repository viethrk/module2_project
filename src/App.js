import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuContextComponent from "./contexts/menu-context";

function App() {
  return (
    <div>
      <MenuContextComponent />
    </div>
  );
}

export default App;
