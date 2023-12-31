import "./header.css";
import { useContext } from "react";
import { CartContext } from "../../ProductsContext";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
const Header = () => {
  const { cartProducts } = useContext(CartContext);

  const calculateTotalQuantity = () => {
    let totalQuantity = 0;
    for (const item of cartProducts) {
      totalQuantity += item.quantity;
    }
    return totalQuantity;
  };

  return (
    <>
      <nav id="page-header">
        <NavLink to="/">
          <img src="/fflogo.png" alt="logo" className="header-logo" />
        </NavLink>

        <NavLink to="/" className="header-routes">
          Home
        </NavLink>
        <NavLink to="/store" className="header-routes">
          Store
        </NavLink>
        <NavLink to="/about" className="header-routes">
          About
        </NavLink>
        <NavLink to="/cart" className="header-cart-container">
          {cartProducts.length > 0 ? (
            <>
              <FontAwesomeIcon icon={faShoppingCart} size="1x" />
              <div className="products-in-cart">{calculateTotalQuantity()}</div>
            </>
          ) : (
            <FontAwesomeIcon icon={faShoppingCart} size="1x" />
          )}
        </NavLink>
      </nav>
      <BurgerMenu />
    </>
  );
};

export default Header;
