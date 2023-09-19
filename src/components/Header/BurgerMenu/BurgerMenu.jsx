import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  return (
    <div className="routes-header">
      <ul className="menu-items">
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" activeClassName="active">
            Store
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
