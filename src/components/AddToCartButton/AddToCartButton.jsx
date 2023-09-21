/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";

import { useHandleAddProduct } from "../../hooks/useHandleAddProduct";

import { ProductsContext, CartContext } from "../../ProductsContext.jsx";
import "./AddToCartButton.css";

const AddToCartButton = ({ productID }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantityToAdd, setQuantityToAdd] = useState("");
  const { products } = useContext(ProductsContext);

  const handleAddProduct1 = useHandleAddProduct();

  const product = products.find((p) => p.id === productID);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      setQuantityToAdd(newQuantity);
    } else {
      setQuantityToAdd("");
    }
  };

  const handleAddToCart = () => {
    handleAddProduct1(product, quantityToAdd);
    closeModal();
    setQuantityToAdd("");
  };

  return (
    <div className="add-to-cart-container">
      <button
        className="add-to-cart-btn"
        onClick={openModal}
        disabled={product.stock === 0}
      >
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
      {isModalOpen && (
        <div className="modal active">
          <div className="modal-content">
            <h2>Add to Cart</h2>
            <div className="input-container">
              <input
                min={0}
                max={product.stock}
                type="number"
                value={quantityToAdd}
                onChange={handleQuantityChange}
              />

              {quantityToAdd > product.stock && (
                <div className="warning-stock-text">Insufficient amount!</div>
              )}
            </div>
            <div className="modal-btn-container">
              <button onClick={closeModal}>Cancel</button>
              <button
                onClick={handleAddToCart}
                disabled={
                  product.stock === 0 ||
                  quantityToAdd === "" ||
                  quantityToAdd <= 0 ||
                  quantityToAdd > product.stock
                }
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
