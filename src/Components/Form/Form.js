import React, { useEffect, useState } from "react";
import useInput from "../../hooks/useInput";

import Wrapper from "./styled/Form.styled";

const Form = () => {
  // const { clientName } = values;

  const [error, setError] = useState(false);
  const [fullfiled, setFullfiled] = useState(false);

  const {
    value: clientName,
    isValid: nameIsValid,
    hasError: nameHasError,
    inputBlurHandler: nameBlur,
    valueChangeHandler: nameChange,
    reset: nameReset,
  } = useInput((val) => val.trim() !== "");

  const {
    value: cardNumber,
    isValid: numberIsValid,
    hasError: numberHasError,
    inputBlurHandler: numberBlur,
    valueChangeHandler: numberChange,
    reset: numberReset,
  } = useInput((val) => val.trim() !== "");

  const {
    value: cardMonth,
    isValid: monthIsValid,
    hasError: monthHasError,
    inputBlurHandler: monthBlur,
    valueChangeHandler: monthChange,
    reset: monthReset,
  } = useInput((val) => val.trim() !== "");

  const {
    value: cardYear,
    isValid: yearIsValid,
    hasError: yearHasError,
    inputBlurHandler: yearBlur,
    valueChangeHandler: yearChange,
    reset: yearReset,
  } = useInput((val) => val.trim() !== "");

  const {
    value: cardCVC,
    isValid: CVCIsValid,
    hasError: CVCHasError,
    inputBlurHandler: CVCBlur,
    valueChangeHandler: CVCChange,
    reset: CVCReset,
  } = useInput((val) => val.trim() !== "");

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError(false);
      }, 7000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !isNaN(Number(cardNumber)) &&
      !isNaN(Number(cardMonth)) &&
      !isNaN(Number(cardYear)) &&
      !isNaN(Number(cardCVC)) &&
      isNaN(Number(clientName))
    ) {
      console.log("1: all numbers");
      if (
        nameIsValid &&
        numberIsValid &&
        monthIsValid &&
        yearIsValid &&
        CVCIsValid
      ) {
        console.log("2: all valid");
        // success
        nameReset();
        numberReset();
        monthReset();
        yearReset();
        CVCReset();
        setFullfiled(true);
        return;
      }
      console.log("3: some value not valid");
    }
    console.log("one is not a number");
    setError(true);
    return;
  };

  /*   const onChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);

    setValues((prev) => {
      return [...prev, { value, name, error: false }];
    });
  }; */

  return (
    <Wrapper>
      <form onSubmit={onSubmit} className={error ? "form error" : "form"}>
        <h5 className="error__title">
          Something wrong with your value, please check, and submit again
        </h5>

        <div className="form-control">
          <label htmlFor="name">cardholder name</label>
          <input
            onChange={nameChange}
            value={clientName}
            type="text"
            id="name"
            name="clientName"
            placeholder="e.g Jabe Appleseed"
            onBlur={nameBlur}
            className={nameHasError ? "error" : null}
          />
          <span className="input__error">Can't be blank</span>
        </div>
        <div className="form-control">
          <label htmlFor="number">card number</label>
          <input
            onChange={numberChange}
            onBlur={numberBlur}
            type="text"
            id="number"
            name="cardNumber"
            placeholder="e.g 1234 5678 9123 0000"
            maxLength={16}
            className={numberHasError ? "error" : null}
            value={cardNumber}
          />
          <span className="input__error">Wrong format, must be numbers</span>
        </div>
        <div className="form-control-inline">
          <div className="form-control">
            <label htmlFor="date">exp. date (mm/yy)</label>
            <div className="date-inputs-container">
              <input
                className={monthHasError ? "error" : null}
                onChange={monthChange}
                onBlur={monthBlur}
                type="text"
                id="date"
                name="cardMonth"
                placeholder="MM"
                value={cardMonth}
                maxLength={2}
              />
              <input
                className={yearHasError ? "error" : null}
                onChange={yearChange}
                onBlur={yearBlur}
                type="text"
                id="date"
                name="cardYear"
                placeholder="YY"
                maxLength={2}
                value={cardYear}
              />
              <span className="input__error">Can't be blank</span>
            </div>
          </div>

          <div className="form-control cvc">
            <label htmlFor="cardCVC">cvc</label>
            <input
              className={CVCHasError ? "error" : null}
              onChange={CVCChange}
              onBlur={CVCBlur}
              type="text"
              id="cardCVC"
              name="cardCVC"
              placeholder="e.g 123"
              maxLength={4}
              value={cardCVC}
            />
            <span className="input__error">Can't be blank</span>
          </div>
        </div>

        <button type="submit" className="btn form-btn" onClick={onSubmit}>
          Confirm
        </button>
      </form>
    </Wrapper>
  );
};

export default Form;
