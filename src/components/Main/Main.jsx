import "./main.css";

import { Outlet } from "react-router-dom";
import {} from "../../ProductsContext.jsx";

const Main = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Main;
