/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./product-card.css";
import Cart from "../../routes/Cart/Cart";
const ProductCard = ({
  title,
  brand,
  category = null,
  description = null,
  discount = null,
  id,
  discountedPrice,
  originalPrice,
  rating = null,
  stock = null,
  imgUrl,
}) => {
  const [itemStock, setItemStock] = useState(stock);
  const [itemAdded, setItemAdded] = useState(0);
  const [itemRemoved, setItemRemoved] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleClick = (item) => {
    if (itemStock === 0) return alert(`This item is not available anymore!`);
    setItemStock(itemStock - 1);
    setItemAdded(itemAdded + 1);
    setTotalPrice(totalPrice + item.discountedPrice);
    <Cart
      imgUrl={imgUrl}
      title={title}
      productPrice={discountedPrice}
      totalProducts={itemAdded}
      totalProductPrice={totalPrice}
    />;
    console.log(item);
  };
  return (
    <div className="product-card">
      <header className="product-card-header">
        {" "}
        <h3 className="product-title">{title}</h3>
        <div className="product-brand">{brand}</div>
      </header>
      <img src={imgUrl} alt="product image" className="product-img" />
      <div className="bottom-section">
        <div className="product-rating">{rating}</div>
        <div className="product-discount">{discount}% OFF</div>
        <div className="product-price-container">
          <div className="product-discountedPrice">{discountedPrice}$</div>
          <div className="product-originalPrice">{originalPrice}$</div>
        </div>
        <div className="product-stock">
          <strong>{itemStock}</strong> currently in stock
        </div>
        <button
          className="add-to-cart-btn"
          onClick={() =>
            handleClick({ title, brand, discountedPrice, stock, imgUrl })
          }
        >
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
