import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(true);
  const [inputVaild, setInputVaild] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "email":
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? setEmailValid(false)
            : setEmailValid(true);
          break;
        default:
          return value;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || emailValid) {
      setInputVaild(false);
    } else {
      setInputVaild(true);
    }
  }, [isEmpty, minLengthError, emailValid]);
  return {
    isEmpty,
    minLengthError,
    inputVaild,
    emailValid,
  };
};

export default useValidation;