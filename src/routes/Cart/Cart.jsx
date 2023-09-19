/* eslint-disable react/prop-types */
import "./cart.css";
import { useContext, useState, useEffect } from "react";
import { CartContext, ProductsContext } from "../../ProductsContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let calculatedTotalPrice = 0;
    for (const item of cartProducts) {
      calculatedTotalPrice += item.quantity * item.price;
    }
    setTotalPrice(calculatedTotalPrice);
  }, [cartProducts]);

  const handleQuantityChange = (id, change) => {
    const product = products.find((p) => p.id === id);

    if (product.stock === 0)
      return alert("There are no more products in stock for this item.");

    const updatedCart = cartProducts.reduce((acc, item) => {
      if (item.id === id) {
        const updatedQuantity = item.quantity + change;
        if (updatedQuantity >= 1)
          acc.push({ ...item, quantity: updatedQuantity });
      } else acc.push(item);

      let updatedStock = 0;

      const product = products.find((product) => product.id === id);
      if (change === 1) updatedStock = product.stock - 1;
      else updatedStock = product.stock + 1;

      const updatedProduct = { ...product, stock: updatedStock };
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === updatedProduct.id ? updatedProduct : p
        )
      );
      return acc;
    }, []);
    setCartProducts(updatedCart);
  };

  const handleRemoveFromCart = (itemID) => {
    setCartProducts((prevCartProducts) => {
      const updatedCart = prevCartProducts.filter(({ id }) => id !== itemID);

      const updatedProducts = products.map((product) => {
        const cartItem = prevCartProducts.find(({ id }) => id === product.id);
        if (cartItem) {
          product.quantity = 0;

          product.stock += cartItem.quantity;
        }
        return product;
      });

      setProducts(updatedProducts);

      return updatedCart;
    });
  };

  return (
    <section id="cart-section">
      {cartProducts.length > 0 ? (
        cartProducts.map((item) => {
          return (
            <>
              <div className="cart-item" key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="product-details-img"
                />
                <div className="item-details">
                  <div className="flex-left-container">
                    <h3></h3>
                    <Link
                      to={`/store/product/${item.id}`}
                      className="product-title"
                    >
                      <h3>{item.title}</h3>
                    </Link>
                    <p>Price: ${item.price}</p>
                  </div>
                  <div className="flex-right-container">
                    <div className="quantity-container ">
                      <button
                        className="decrement-quantity quantity-btn"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <p className="quantity"> {item.quantity}</p>

                      <button
                        className="increment-quantity quantity-btn"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>

                    <p>Total: ${item.quantity * item.price}</p>
                    <button
                      className="remove-from-cart-btn"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove product
                    </button>
                  </div>
                </div>
              </div>
              <hr></hr>
            </>
          );
        })
      ) : (
        <div>No products added to cart!</div>
      )}

      {cartProducts.length > 0 && (
        <div className="checkout-price">
          Total price for checkout : {totalPrice}$
        </div>
      )}
    </section>
  );
};

export default Cart;
