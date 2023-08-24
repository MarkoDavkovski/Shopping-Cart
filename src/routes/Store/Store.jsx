import "./store.css";
import { useState, useEffect } from "react";

const Store = () => {
  const [products, setProducts] = useState(null);

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
    <>
      <div>
        {products === null ? (
          <div>Loading...</div>
        ) : (
          products.map((product) => <div key={product.id}>{product.brand}</div>)
        )}
      </div>
    </>
  );
};

export default Store;
