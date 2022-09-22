import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FrontCard from "./Components/FrontCard";
import BackCard from "./Components/BackCard";
import Form from "./Components/Form";
import ThankYou from "./Components/ThankYou";

function App() {
  const [cardDetails, setCardDetails] = useState({
    cardHolderName: "Jane Appleseed",
    cardNumber: "000000000000000",
    month: "00",
    year: "00",
    cvv: "000",
  });
  const [confirmedCardDetails, setConfirmedCardDetails] = useState({
    cardHolderName: "Jane Appleseed",
    cardNumber: "000000000000000",
    month: "00",
    year: "00",
    cvv: "000",
  });
  const [isFormFilled, setIsFormFilled] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setCardDetails((prevCardDetails) => ({
      ...prevCardDetails,
      [name]: value,
    }));
  }
  function submitCardDetails() {
    toggleFormFilled();
    setConfirmedCardDetails(cardDetails);
  }

  function continueWithNewDetails() {
    toggleFormFilled();
    setCardDetails({
      cardHolderName: "Jane Appleseed",
      cardNumber: "000000000000000",
      month: "00",
      year: "00",
      cvv: "000",
    });
    setConfirmedCardDetails({
      cardHolderName: "Jane Appleseed",
      cardNumber: "000000000000000",
      month: "00",
      year: "00",
      cvv: "000",
    });
  }

  function toggleFormFilled() {
    setIsFormFilled((prevIsFormFilled) => !prevIsFormFilled);
  }
  return (
    <div className="App">
      <div className="bg-image-container"></div>
      <FrontCard cardDetails={confirmedCardDetails} />
      <BackCard cvv={confirmedCardDetails.cvv} />
      {!isFormFilled ? (
        <Form
          cardDetails={cardDetails}
          handleChange={handleChange}
          submitCardDetails={submitCardDetails}
        />
      ) : (
        <ThankYou continueWithNewDetails={continueWithNewDetails} />
      )}
    </div>
  );
}

export default App;
