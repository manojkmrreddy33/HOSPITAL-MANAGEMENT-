import React from "react";

// Custom Next Arrow
export const NextArrow = ({ onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#004d40",
        color: "#fff",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        position: "absolute",
        right: "-20px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      ▶
    </div>
  );
};

// Custom Previous Arrow
export const PrevArrow = ({ onClick }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#004d40",
        color: "#fff",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        position: "absolute",
        left: "-20px",
        top: "50%",
        transform: "translateY(-50%)",
        cursor: "pointer",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      ◀
    </div>
  );
};

