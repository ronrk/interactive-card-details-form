import styled from "styled-components";
import cardImg from "../../../assets/images/bg-card-back.png";

const CardBack = styled.div`
  background-image: url(${cardImg});

  /* width: 100%; */

  transform: translateX(50%);
  & .card__content {
    position: relative;
    height: 100%;

    & .cvc {
      font-size: 1.4rem;
      position: absolute;
      right: 6rem;
      top: 9rem;
      letter-spacing: 2px;
    }
  }
`;

export default CardBack;
