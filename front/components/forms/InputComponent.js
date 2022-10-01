import React, { useEffect, useReducer } from "react";
import { validate } from "../../utils/validator";

import styles from "./forms.module.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      break;
  }
};

const InputComponent = ({
  placeholder,
  name,
  type,
  validators,
  errorText,
  onInput,
  id,
  ...props
}) => {
  const [input, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValidity || false,
    isTouched: false,
  });

  const inputChangleHandler = (e) => {
    dispatch({ type: "CHANGE", value: e.target.value, validators: validators });
  };

  const blurHandler = () => {
    dispatch({ type: "TOUCH" });
  };

  const { value, isValid } = input;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  return (
    <>
      <div className={`${styles.formInput}`}>
        <input
          type={type || "text"}
          name={name}
          value={input.value}
          onChange={inputChangleHandler}
          onBlur={blurHandler}
          title={placeholder}
          required={props.autoComplete ?? true}
          autoComplete="off"
        />
        <span>{placeholder}</span>
      </div>
      {!input.isValid && input.isTouched && (
        <p className={styles.errorText}>{errorText}</p>
      )}
    </>
  );
};

export default InputComponent;
