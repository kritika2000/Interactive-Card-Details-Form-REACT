import React from "react";
function ThankYou(props) {
  return (
    <div className="thank--you--container">
      <div className="check"></div>
      <h2>Thank You</h2>
      <p>We've added your card details</p>
      <button onClick={props.continueWithNewDetails}>Continue</button>
    </div>
  );
}
export default ThankYou;
