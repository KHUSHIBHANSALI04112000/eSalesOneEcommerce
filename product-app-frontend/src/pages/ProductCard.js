// ProductCard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuantitySelector from "./QuantitySelector.js";
import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const watchImages = {
    black:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/se-case-select-202409-midnight_GEO_IN?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=Kzl5VjJlYy8yNE5uZ1M0cU0rKzBvQ25Nd08wRHUvYzUwMUt3S0RDK0NoSEl5SEtmVWJESCt2YXA0WTJNS0l0MVN4akdjaWsxOXRHMzdmYXdzRTJINldhR0w5VkI2OHNjR0xYQTNOTTNxeW04OWxPcytVMDA4UEdDSzFCYVBpREY",
    beige:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJ33ref_VW_34FR+watch-case-40-aluminum-starlight-nc-se_VW_34FR+watch-face-40-aluminum-starlight-se_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=L1VPMlk5ZkpkOVFZR3Fud25vckh4RStGZUJWLzNFUFVydllxZFp0d1M4NktoaXQwYi9wRGFOV2FsZVA1S1dYc3U0MnNvUmFpbmpuWFJpcHZlcmRSWXdScEJ3QjIyVnl6dGRLV0ozWGQvU3RmSGlnNkpTM1NGVHN6YWcySEw0THd4cVNUNDJadDNVSmRncE9SalAvZ24wUVN3R3VxZWhYYXgwOHljYmZFMXBocmMyRTN3NCt6QkoxaUdRb0FBay9VYktGTHdENW9lYUFnak5pcy9ReEdDWjZJWmJ3OE4rRnJmNVg5NGQ1U2tPU0hpZXlIbUpZZFJvVExKQ2pQMlhkdg",
    grey:
      "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYJ83_VW_34FR+watch-case-40-aluminum-silver-nc-se_VW_34FR+watch-face-40-aluminum-silver-se_VW_34FR?wid=5120&hei=3280&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=V2RlOFM1MndsZmZ2c1haY0tMVFdBcVlzYkZNY3F4TTRRa0RYbTQyZ0VlRXZBUXVDSWtueGFFWmRtanJVdndvV09KUzdvZ3djYmY2eTQxUi9CM2Izc25xRUV4bmMxNGV6OVdQaDJFZmVBYTErWk8xOUJna1QreFdobVdRV2dCS1pSd2NzWllSMVowSzNFMjFhV0RNcWhKUDhoaDQvQk1qdG9oYWwxVDBSWE5ueFBYN1QxYzVKQXZvbXpRaU9oa2xkSndoMjNQaXpaYS9oa3VMMEdpclFocmhaTlpBR2JUZ3Z4Z0pzTEZrVjBXcw"
  };

  const handleBuyNow = () => {
    if (quantity < 1) {
      alert("Please select at least one item before proceeding to checkout");
      return;
    }
    navigate("/orders", {
      state: { product, selectedVariant, quantity }
    });
  };

  const handleClearCart = () => {
    setQuantity(0);
  };

  return (
    <div className="product-card">
      <img
        src={watchImages[selectedVariant.toLowerCase()]}
        alt={product.title}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p className="price">
        <strong>Price: </strong>${product.price}
      </p>

      <label>Select a Color:</label>
      <div style={{ display: "flex", gap: "10px" }}>
        {product.variants.map((variant, index) => (
          <button
            key={index}
            style={{
              backgroundColor: variant.toLowerCase(),
              padding: "10px",
              border:
                selectedVariant === variant
                  ? "2px solid black"
                  : "1px solid gray",
              cursor: "pointer"
            }}
            onClick={() => setSelectedVariant(variant)}
          >
            {variant}
          </button>
        ))}
      </div>

      <QuantitySelector
        quantity={quantity}
        min={1}
        max={10}
        onQuantityChange={setQuantity}
      />

      <button onClick={handleBuyNow}>Buy Now!</button>
      {quantity >= 1 && (
        <button onClick={handleClearCart} className="clear-cart-button">
          Clear Cart
        </button>
      )}
    </div>
  );
};
