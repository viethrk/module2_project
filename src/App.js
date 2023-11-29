import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RouteComponent from "./routes/routes";
import LoadingComponent from "./components/organisms/loading";
import { useSelector } from "react-redux";

function App() {
  const loadingState = useSelector((state) => state.loadingState);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loadingState && <LoadingComponent />}
      <RouteComponent />
    </div>
  );
}

export default App;
