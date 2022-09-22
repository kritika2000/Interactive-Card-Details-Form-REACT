import React from "react";

function BackCard(props) {
  return (
    <div className="bg-card-back-container">
      <div style={{ color: "#fff", fontWeight: "550" }}>{props.cvv}</div>
    </div>
  );
}

export default BackCard;
