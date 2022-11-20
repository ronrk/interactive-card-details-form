import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputBlurHandler,
    valueChangeHandler,
    isTouched,
    reset,
  };
};

export default useInput;
