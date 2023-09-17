/* eslint-disable react/prop-types */
import "./store.css";

import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { ProductsContext, CartContext } from "../../ProductsContext.jsx";
import { useContext } from "react";

const Store = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const handleAddProduct = (selectedProduct) => {
    const productInCart = cartProducts.find(
      (product) => product.id === selectedProduct.id
    );

    if (productInCart) {
      const updatedCart = cartProducts.map((product) => {
        if (product.id === selectedProduct.id)
          return { ...product, quantity: product.quantity + 1 };
        return product;
      });
      setCartProducts(updatedCart);
    } else {
      setCartProducts([...cartProducts, { ...selectedProduct, quantity: 1 }]);
    }

    const nextState = [...products];
    nextState.map((product) => {
      if (product.id === selectedProduct.id) {
        return { ...product, stock: product.stock-- };
      }
      return product;
    });

    setProducts(nextState);
  };

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
