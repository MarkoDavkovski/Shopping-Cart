import "./header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <nav id="page-header">
        <NavLink to="/">
          <img src="/fflogo.png" alt="logo" className="header-logo" />
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Store">Store</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Cart">
          <FontAwesomeIcon icon={faShoppingCart} size="1x" />
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
