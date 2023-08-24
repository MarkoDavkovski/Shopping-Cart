import "./header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <>
      <nav id="page-header">
        <Link to="/">
          <img src="/fflogo.png" alt="logo" className="header-logo" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/Store">Store</Link>
        <Link to="/About">About</Link>
        <Link to="/Cart">
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} size="1x" />
        </Link>
      </nav>
    </>
  );
};

export default Header;
