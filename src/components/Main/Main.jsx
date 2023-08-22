// import Home from "../../routes/Home/Home.jsx";
import "./main.css";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Main;
