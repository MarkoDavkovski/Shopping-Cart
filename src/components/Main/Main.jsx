import "./main.css";

// import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import Store from "../../routes/Store/Store";

const Main = () => {
  // const [products, setProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.products))
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setProducts([]);
  //     });

  //   console.log("useEffect main");
  // }, [products.length]);

  // const addToCart = (product) => {};

  // const removeFromCart = (productId) => {};
  // console.log(products);

  // {
  //   products.length > 0 && <Store products={products} />;
  // }
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default Main;
