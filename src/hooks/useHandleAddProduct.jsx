import { useContext } from "react";
import { ProductsContext, CartContext } from "../ProductsContext.jsx";

export const useHandleAddProduct = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const handleAddProduct = (selectedProduct, qToAdd = 0) => {
    const productInCart = cartProducts.find(
      (product) => product.id === selectedProduct.id
    );

    if (productInCart) {
      const updatedCart = cartProducts.map((product) => {
        if (product.id === selectedProduct.id) {
          return {
            ...product,
            quantity: (product.quantity += qToAdd),
            stock: (product.stock -= qToAdd),
          };
        }
        return product;
      });
      setCartProducts(updatedCart);
    } else {
      setCartProducts([
        ...cartProducts,
        { ...selectedProduct, quantity: (selectedProduct.quantity += qToAdd) },
      ]);
    }

    const nextState = [...products];
    nextState.map((product) => {
      if (product.id === selectedProduct.id) {
        return { ...product, stock: (product.stock -= qToAdd) };
      }
      return product;
    });
    setProducts(nextState);
  };

  return handleAddProduct;
};
