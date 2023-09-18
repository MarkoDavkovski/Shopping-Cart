/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faStar,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext, CartContext } from "../../ProductsContext.jsx";

import "./productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, setProducts } = useContext(ProductsContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const product = products.find((item) => item.id == id);
  let originalPrice = null;
  if (product) {
    originalPrice = product.price / (1 - product.discountPercentage / 100);
    originalPrice = parseFloat(originalPrice).toFixed(2);
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % product.images.length
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className="product-details-card">
      {product ? (
        <>
          <header className="product-details-card-header">
            <h3 className="product-details-title">{product.title}</h3>
            <div className="product-details-brand">{product.brand}</div>
          </header>
          <div className="product-details-image-container">
            <img
              src={product.images[currentImageIndex]}
              alt="product details image"
              className="product-details-img"
            />
            <button className="prev-btn" onClick={previousImage}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="next-btn" onClick={nextImage}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="pd-bottom-section">
            <div className="pd-product-store-details">
              <div className="product-details-rating">
                {product.rating} <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="product-details-discount">
                {product.discountPercentage}% OFF
              </div>
              <div className="product-details-price-container">
                <div className="product-details-originalPrice">
                  {originalPrice}$
                </div>
                <div className="product-details-discountedPrice">
                  {product.price.toFixed(2)}$
                </div>
              </div>
              <div className="product-details-stock">
                <strong>{product.stock}</strong> currently in stock
              </div>
              <button
                className="add-to-cart-btn"
                onClick={product.handleProducts}
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="product-details-cart"
                />
              </button>
            </div>
            <div className="product-details-category">
              Category : {product.category}
            </div>
            <div className="product-details-description">
              Description : {product.description}
            </div>
          </div>
        </>
      ) : (
        <h1>Product you are trying to visit does not exist</h1>
      )}
    </section>
  );
};

export default ProductDetails;
