/* eslint-disable react/prop-types */
import "./store.css";

import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { ProductsContext } from "../../ProductsContext.jsx";
import { useContext } from "react";
import { useHandleAddProduct } from "../../hooks/useHandleAddProduct";

const Store = () => {
  const { products } = useContext(ProductsContext);

  const handleAddProduct = useHandleAddProduct();

  return (
    <section id="store">
      {products &&
        products.map((product) => {
          let originalPrice =
            product.price / (1 - product.discountPercentage / 100);
          originalPrice = parseFloat(originalPrice).toFixed(2);

          return (
            <ProductCard
              key={product.id}
              {...product}
              originalPrice={originalPrice}
              handleProducts={() => handleAddProduct(product)}
            />
          );
        })}
    </section>
  );
};

export default Store;
