import React from "react";
import Wrapper from "./styled/CardBack.styled";

const CardBack = ({ cardCVC }) => {
  return (
    <Wrapper className="card">
      <div className="card__content">
        <span className="cvc">{cardCVC ? cardCVC : "000"}</span>
      </div>
    </Wrapper>
  );
};

export default CardBack;
