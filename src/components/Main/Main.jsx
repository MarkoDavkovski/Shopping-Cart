/* eslint-disable react/prop-types */
// import Home from "../../routes/Home/Home.jsx";
import "./main.css";
import { Outlet } from "react-router-dom";
const Main = ({ children }) => {
  return (
    <main>
      {children}
      <Outlet />
    </main>
  );
};

export default Main;
