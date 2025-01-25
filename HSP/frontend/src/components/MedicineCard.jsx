    // MedicineCard.jsx
import React from "react";

const MedicineCard = ({ name, price, originalPrice, discount, imageUrl }) => {
  const cardStyle = {
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "10px",
    textAlign: "center",
    margin: "10px",
    width: "90%", 
    boxSizing: "border-box",
  };
  

  const buttonStyle = {
    backgroundColor: "#006400",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={name} style={{ width: "100%", height: "100px" }} />
      <h4 style={{ fontSize: "14px" }}>{name}</h4>
      <p style={{ color: "green", margin: "5px 0" }}>
        ₹{price} <span style={{ textDecoration: "line-through", color: "gray" }}>₹{originalPrice}</span> {discount} off
      </p>
      <button style={buttonStyle}>ADD</button>
    </div>
  );
};

export default MedicineCard;
