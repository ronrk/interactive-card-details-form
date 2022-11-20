import React from "react";
import Wrapper from "./styled/CardFront.styled";
import { ReactComponent as CardIcon } from "../../assets/images/card-logo.svg";

const CardFront = () => {
  return (
    <Wrapper className="card">
      <div className="card__content">
        <CardIcon className="card__icon" />
        <div className="card__number">
          <span>0000</span>
          <span>0000</span>
          <span>0000</span>
          <span>0000</span>
        </div>
        <div className="card__footer">
          <span className="client__name">jane applebseed</span>
          <span className="card__date">00/00</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default CardFront;
