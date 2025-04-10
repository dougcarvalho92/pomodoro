import { Outlet } from "react-router";
import Template from "./components/Template";

function App() {
  return (
    <Template>
      <Outlet />
    </Template>
  );
}
export default App;
