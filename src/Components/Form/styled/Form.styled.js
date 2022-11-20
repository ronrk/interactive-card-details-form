import styled from "styled-components";

const FormWrapper = styled.section`
  /* width: 100%; */
  align-self: center;
  margin-left: 30rem;
  @media screen and (max-width: 1200px) {
    margin-left: 26rem;
  }
  @media screen and (max-width: 950px) {
    margin-left: 23rem;
  }
  @media screen and (max-width: 850px) {
    margin-left: 20rem;
  }

  & .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4rem;

    & .form-control {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      width: 80%;
      & label {
        font-size: 2rem;
        font-family: var(--font);
        text-transform: uppercase;
        letter-spacing: 1.3px;
        color: var(--very-dark-violet);
      }
      & input {
        width: 35rem;
        height: 4rem;
        padding: 2rem;
        font-family: var(--font);
        color: var(--very-dark-violet);
        border-radius: 4px;
        border: 1px solid var(--dark-grayish-violet);
        font-size: 1.7rem;

        &::placeholder {
          font-size: 1.4rem;
          letter-spacing: 1.2px;
        }
      }
    }

    & .form-control-inline {
      display: flex;

      align-items: center;

      & .form-control {
        &.cvc {
          & input {
            padding: 1rem;
            /* width: 20rem; */
          }
        }
        & input {
          width: 50%;
        }
      }

      & .date-inputs-container {
        display: flex;
        gap: 2rem;
        & input {
          width: 7.5rem;
          padding: 1rem;
        }
      }
    }
  }

  & .form-btn {
    background-color: var(--very-dark-violet);
    width: 35rem;
    height: 4rem;
    color: var(--white);
  }
`;

export default FormWrapper;
