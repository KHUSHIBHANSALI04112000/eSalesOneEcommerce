import React from "react";
import './QuantitySelector.css'

const QuantitySelector = ({ quantity, min = 1, max = 10, onQuantityChange }) => {
  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
     <button onClick={handleIncrease} disabled={quantity >= max}>
        Add to Cart
      </button>
      <input
        type="number"
        value={quantity}
        readOnly
        style={{ width: "50px", textAlign: "center", margin: "0 10px" }}
      />
      
    </div>
  );
};

export default QuantitySelector;
