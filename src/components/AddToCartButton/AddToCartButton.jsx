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
    }
  };

  const handleAddToCart = () => {
    if (!product) {
      return;
    }
    const currentQuantityToAdd = parseInt(quantityToAdd, 10);
    if (isNaN(currentQuantityToAdd) || currentQuantityToAdd <= 0) {
      console.log(quantityToAdd);
      return alert("Please enter a valid quantity greater than 0.");
    }
    if (product.stock === 0 || currentQuantityToAdd > product.stock) {
      alert("There are not enough products in store");
      closeModal();
    } else {
      handleAddProduct1(product, currentQuantityToAdd);
      closeModal();
      setQuantityToAdd("");
    }
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
            <input
              min={1}
              type="text"
              value={quantityToAdd}
              onChange={handleQuantityChange}
            />
            <div>
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
