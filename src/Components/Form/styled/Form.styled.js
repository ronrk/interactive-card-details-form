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

  @media screen and (max-width: 750px) {
    margin: 5rem auto;
  }

  & .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4rem;
    @media screen and (max-width: 750px) {
      margin-top: 8rem;
    }

    & .error__title {
      font-size: 1.3rem;
      color: var(--red);
      font-family: var(--font);
      text-transform: uppercase;
      letter-spacing: 1.1px;
      transform: translateX(-5rem);
      /* margin-top: 3rem; */
      visibility: hidden;
      transition: 0.2s all;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.3);
      padding: 1rem;
      border-radius: 5px;
    }
    &.error {
      & .error__title {
        visibility: visible;

        opacity: 1;
      }
    }

    & .form-control {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
      width: 80%;
      & .input__error {
        visibility: hidden;
        opacity: 0;
        transition: all 0.2s;
      }
      & label {
        font-size: 2rem;
        font-family: var(--font);
        text-transform: uppercase;
        letter-spacing: 1.3px;
        color: var(--very-dark-violet);
        @media screen and (max-width: 1200px) {
          font-size: 1.8rem;
        }
        @media screen and (max-width: 950px) {
          font-size: 1.7rem;
        }
        @media screen and (max-width: 850px) {
          font-size: 1.5rem;
        }
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
        @media screen and (max-width: 750px) {
          width: 100%;
        }

        &.error ~ span {
          visibility: visible;
          opacity: 1;
          color: var(--red);
          font-size: 1.2rem;
          font-family: var(--font);
        }
        &:focus {
          outline: 0;
          border-color: var(--very-dark-violet);
        }

        &::placeholder {
          font-size: 1.4rem;
          letter-spacing: 1.2px;
        }
      }
    }

    & .form-control-inline {
      display: flex;

      align-items: flex-start;
      @media screen and (max-width: 750px) {
        width: 100%;
      }

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
        position: relative;
        & input {
          width: 7.5rem;
          padding: 1rem;

          &.error ~ span {
            position: absolute;
            bottom: -2rem;
            left: 4rem;
          }
        }
      }
    }
  }

  & .form-btn {
    background-color: var(--very-dark-violet);
    width: 35rem;
    height: 4rem;
    color: var(--white);
    @media screen and (max-width: 750px) {
      width: 80%;
    }
  }
`;

export default FormWrapper;
