/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import "./product-card.css";
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
          <strong>{stock}</strong> currently in stock
        </div>
        <button className="add-to-cart-btn">
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
