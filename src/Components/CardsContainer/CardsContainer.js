import React from "react";
import Wrapper from "./styled/CardsContainer.styled";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const CardsContainer = ({
  clientName,
  cardNumber,
  cardMonth,
  cardYear,
  cardCVC,
}) => {
  return (
    <Wrapper>
      <CardFront
        values={{ clientName, cardMonth, cardCVC, cardYear, cardNumber }}
      />
      <CardBack cardCVC={cardCVC} />
    </Wrapper>
  );
};

export default CardsContainer;
