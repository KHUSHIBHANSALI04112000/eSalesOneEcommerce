import React from "react";
import "./QuantitySelector.css";

const QuantitySelector = ({ quantity, setQuantity, min = 1, max = 10 }) => {
  const handleIncrease = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={handleDecrease} disabled={quantity <= min}> - </button>
      <p>
        You selected {quantity} item{quantity > 1 ? "s" : ""}
      </p>
      <button onClick={handleIncrease} disabled={quantity >= max}> + </button>
    </div>
  );
};

export default QuantitySelector;
