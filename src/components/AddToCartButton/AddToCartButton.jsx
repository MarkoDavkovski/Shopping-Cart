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
  const { products, setProducts } = useContext(ProductsContext);
  const { cartProducts, setCartProducts } = useContext(CartContext);

  const handleAddProduct1 = useHandleAddProduct();

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
    const product = products.find((p) => p.id === productID);
    const currentQuantityToAdd = quantityToAdd;

    if (product.stock < currentQuantityToAdd) {
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
      <button className="add-to-cart-btn" onClick={openModal}>
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
      {isModalOpen && (
        <div className="modal active">
          <div className="modal-content">
            <h2>Add to Cart</h2>
            <input
              type="text"
              value={quantityToAdd}
              onChange={handleQuantityChange}
            />
            <div>
              <button onClick={closeModal}>Cancel</button>
              <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
