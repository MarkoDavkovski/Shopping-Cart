/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./product-card.css";
import { Link } from "react-router-dom";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

const ProductCard = ({
  id,
  title,
  brand,
  discountPercentage,
  price,
  originalPrice,
  rating,
  stock,
  images,
  quantity,
  handleProducts,
}) => {
  return (
    <div className="product-card">
      <header className="product-card-header">
        <Link to={`/store/product/${id}`} className="product-title">
          <h3>{title}</h3>
        </Link>
        <div className="product-brand">{brand}</div>
      </header>

      <Link to={`/store/product/${id}`} className="product-image">
        <img src={images[0]} alt="product image" className="product-img" />
      </Link>
      <div className="bottom-section">
        <div className="product-rating">
          {rating} <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="product-discount">{discountPercentage}% OFF</div>
        <div className="product-price-container">
          <div className="product-originalPrice">{originalPrice}$</div>
          <div className="product-discountedPrice">{price.toFixed(2)}$</div>
        </div>
        <div className="product-stock">
          <strong>{stock}</strong> currently in stock
        </div>

        <AddToCartButton handleAddProduct={handleProducts} productID={id} />
      </div>
    </div>
  );
};

export default ProductCard;
