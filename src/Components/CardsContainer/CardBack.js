import React from "react";
import Wrapper from "./styled/CardBack.styled";

const CardBack = () => {
  return (
    <Wrapper className="card">
      <div className="card__content">
        <span className="cvc">000</span>
      </div>
    </Wrapper>
  );
};

export default CardBack;
