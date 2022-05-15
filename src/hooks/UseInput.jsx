import { useState } from "react";
import useValidation from "./UseValidation";

const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const vaild = useValidation(value, validations);
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };
  return {
    value,
    onBlur,
    onChange,
    isDirty,
    ...vaild,
  };
};

export default useInput;