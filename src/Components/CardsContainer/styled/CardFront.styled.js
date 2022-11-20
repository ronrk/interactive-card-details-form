import styled from "styled-components";
import cardImg from "../../../assets/images/bg-card-front.png";

const CardFront = styled.div`
  background-image: url(${cardImg});

  transform: translateX(30%);

  & .card__content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1rem;
  }

  & .card__icon {
    flex: 1;
    /* padding: 2rem; */
    margin-left: -5rem;
    transform: scale(0.7);
  }
  & .card__number {
    gap: 1.5rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    letter-spacing: 2.5px;
  }

  & .card__footer {
    flex: 0.4;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    /* position: absolute; */
    bottom: 2vw;

    display: flex;
    justify-content: space-between;
    width: 100%;
    /* align-items: center; */
    padding: 0 1rem;
  }
`;

export default CardFront;
