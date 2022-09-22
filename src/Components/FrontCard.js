import React from "react";

function FrontCard(props) {
  console.log(props.cardDetails);
  const { cardHolderName, cardNumber, month, year } = props.cardDetails;
  console.log(cardNumber);
  return (
    <div className="bg-card-front-container">
      <div className="circles--container">
        <span></span>
        <span></span>
      </div>
      <div className="card--number--container">
        <div>
          <span>{cardNumber[0]}</span>
          <span>{cardNumber[1]}</span>
          <span>{cardNumber[2]}</span>
          <span>{cardNumber[3]}</span>
        </div>
        <div>
          {" "}
          <span>{cardNumber[4]}</span>
          <span>{cardNumber[5]}</span>
          <span>{cardNumber[6]}</span>
          <span>{cardNumber[7]}</span>
        </div>
        <div>
          {" "}
          <span>{cardNumber[8]}</span>
          <span>{cardNumber[9]}</span>
          <span>{cardNumber[10]}</span>
          <span>{cardNumber[11]}</span>
        </div>
        <div>
          {" "}
          <span>{cardNumber[12]}</span>
          <span>{cardNumber[13]}</span>
          <span>{cardNumber[14]}</span>
          <span>{cardNumber[15]}</span>
        </div>
      </div>
      <div className="card--holder--container">
        <div>{cardHolderName}</div>
        <div>
          {month}/{year}
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
