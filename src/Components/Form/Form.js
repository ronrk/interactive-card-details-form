import React from "react";

import Wrapper from "./styled/Form.styled";

const Form = () => {
  return (
    <Wrapper>
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">cardholder name</label>
          <input
            type="text"
            id="name"
            name="clientName"
            placeholder="e.g Jabe Appleseed"
          />
        </div>
        <div className="form-control">
          <label htmlFor="number">card number</label>
          <input
            type="number"
            id="number"
            name="cardNumber"
            placeholder="e.g 1234 5678 9123 0000"
          />
        </div>
        <div className="form-control-inline">
          <div className="form-control">
            <label htmlFor="date">exp. date (mm/yy)</label>
            <div className="date-inputs-container">
              <input
                type="number"
                id="date"
                name="cardMonth"
                placeholder="MM"
              />
              <input type="number" id="date" name="cardYear" placeholder="YY" />
            </div>
          </div>

          <div className="form-control cvc">
            <label htmlFor="cvc">cvc</label>
            <input
              type="number"
              id="cvc"
              name="cardCVC"
              placeholder="e.g 123"
            />
          </div>
        </div>

        <button className="btn form-btn">Confirm</button>
      </form>
    </Wrapper>
  );
};

export default Form;
