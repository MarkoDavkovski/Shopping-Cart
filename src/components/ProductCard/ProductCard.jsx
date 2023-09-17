/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import "./product-card.css";

const ProductCard = ({
  title,
  brand,
  discountPercentage,
  price,
  originalPrice,
  rating,
  stock,
  images,
  handleProducts,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-card">
      <header className="product-card-header">
        {" "}
        <h3 className="product-title">{title}</h3>
        <div className="product-brand">{brand}</div>
      </header>

      <div className="product-image">
        <img
          src={images[currentImageIndex]}
          alt="product image"
          className="product-img"
        />
        {/* <button onClick={previousImage}>Previous</button> */}
        {/* <button onClick={nextImage}>Next</button> */}
      </div>
      <div className="bottom-section">
        <div className="product-rating">
          {rating} <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="product-discount">{discountPercentage}% OFF</div>
        <div className="product-price-container">
          <div className="product-discountedPrice">{price.toFixed(2)}$</div>
          <div className="product-originalPrice">{originalPrice}$</div>
        </div>
        <div className="product-stock">
          <strong>{stock}</strong> currently in stock
        </div>
        <button className="add-to-cart-btn" onClick={handleProducts}>
          <FontAwesomeIcon icon={faCartPlus} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
