/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./cart.css";

const Cart = ({
  imgUrl,
  title,
  productPrice,
  totalProducts,
  totalProductPrice,
}) => {
  return (
    <section id="cart-section">
      <div className="cart-item">
        <img src={imgUrl} alt="Product" />
        <div className="item-details">
          <h3>{title}</h3>
          <p>Price: ${productPrice}</p>
          <p>Quantity: {totalProducts}</p>
          <p>Total: ${totalProductPrice}</p>
        </div>
      </div>
      {/* You can repeat the above structure for each item in the cart */}
    </section>
  );
};

export default Cart;
