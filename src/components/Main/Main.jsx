import "./main.css";

import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductsContext, CartContext } from "../../ProductsContext.jsx";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setProducts([]);
      });
  }, []);

  return (
    <main>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
          <Outlet />
        </CartContext.Provider>
      </ProductsContext.Provider>
    </main>
  );
};

export default Main;
