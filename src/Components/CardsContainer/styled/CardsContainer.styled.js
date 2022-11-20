import styled from "styled-components";
import bg from "../../../assets/images/bg-main-desktop.png";

const CardsContainerWrapper = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  /* height: 100vh; */
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 30vw;
  flex-shrink: 0;
  /* flex-grow: 1; */

  @media screen and (max-width: 750px) {
    width: 100%;
    background-size: 100%;
    height: 35rem;
  }
`;

export default CardsContainerWrapper;
