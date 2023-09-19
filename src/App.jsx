import { useState, useEffect } from "react";
import { CartContext, ProductsContext } from "./ProductsContext";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./index.css";
import "./components/Main/main.css";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const productsWithQuantity = data.products.map((product) => ({
          ...product,
          quantity: 0,
        }));
        setProducts(productsWithQuantity);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setProducts([]);
      });
  }, []);

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
          <Header />
          <Main />
        </CartContext.Provider>
      </ProductsContext.Provider>

      <Footer />
    </>
  );
}

export default App;
