import React, { useEffect } from "react";
import Wrapper from "./styled/CardFront.styled";
import { ReactComponent as CardIcon } from "../../assets/images/card-logo.svg";

const CardFront = ({ values }) => {
  const { clientName, cardNumber, cardMonth, cardYear } = values;

  return (
    <Wrapper className="card">
      <div className="card__content">
        <CardIcon className="card__icon" />
        <div className="card__number">
          {cardNumber ? (
            <span>{cardNumber}</span>
          ) : (
            <>
              <span>0000</span>
              <span>0000</span>
              <span>0000</span>
              <span>0000</span>
            </>
          )}
        </div>
        <div className="card__footer">
          <span className="client__name">
            {clientName ? clientName : "jane applebseed"}
          </span>
          <span className="card__date">
            {cardMonth ? cardMonth : "00"}/{cardYear ? cardYear : "00"}
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardFront;
