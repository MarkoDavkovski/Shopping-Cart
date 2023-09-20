import { useState, useEffect } from "react";
import { CartContext, ProductsContext } from "./ProductsContext";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./index.css";
import "./components/Main/main.css";

const loadFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

function App() {
  const [cartProducts, setCartProducts] = useState(
    loadFromLocalStorage("cartProducts") || []
  );
  const [products, setProducts] = useState(
    loadFromLocalStorage("products") || []
  );

  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  useEffect(() => {
    if (products.length === 0) {
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
    }
  }, []);

  useEffect(() => {
    const savedCartProducts = loadFromLocalStorage("cartProducts");
    if (savedCartProducts.length !== 0) {
      setCartProducts(savedCartProducts);
    }

    const savedProducts = loadFromLocalStorage("products");
    if (savedProducts.length !== 0) {
      setProducts(savedProducts);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage("cartProducts", cartProducts);

    saveToLocalStorage("products", products);
  }, [cartProducts, products]);

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
