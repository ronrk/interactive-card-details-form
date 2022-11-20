import React from "react";
import Wrapper from "./styled/CardsContainer.styled";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const CardsContainer = () => {
  return (
    <Wrapper>
      <CardFront />
      <CardBack />
    </Wrapper>
  );
};

export default CardsContainer;
