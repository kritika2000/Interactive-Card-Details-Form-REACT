import React from "react";

function Form(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.submitCardDetails();
      }}
      className="form--container"
    >
      <label htmlFor="cardholder">cardholder name</label>
      <input
        type="text"
        id="cardholder"
        placeholder="e.g. Jane Appleseed"
        name="cardHolderName"
        onChange={(e) => props.handleChange(e)}
      ></input>
      <label htmlFor="cardnumber">card number</label>
      <input
        type="text"
        id="cardnumber"
        placeholder="e.g. 1234 5678 9123 0000"
        name="cardNumber"
        minLength="16"
        maxLength="16"
        onChange={(e) => props.handleChange(e)}
      ></input>
      <label htmlFor="month">Exp. Date(MM/YY)</label>
      <input
        type="number"
        id="month"
        size="2"
        min="1"
        max="12"
        placeholder="MM"
        name="month"
        onChange={(e) => props.handleChange(e)}
      />
      <input
        type="number"
        id="year"
        size="2"
        placeholder="YY"
        name="year"
        min="22"
        onChange={(e) => props.handleChange(e)}
      />
      <label id="cvv--label" htmlFor="cvv">
        cvv
      </label>
      <input
        type="number"
        id="cvv"
        placeholder="e.g. 123"
        name="cvv"
        minLength="3"
        maxLength="3"
        onChange={(e) => props.handleChange(e)}
      ></input>
      <button>Confirm</button>
    </form>
  );
}

export default Form;
