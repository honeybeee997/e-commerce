import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      console.log(state.inputs);
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

export const useForm = (initialInputs, initialValidity) => {
  const [form, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialValidity,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: "INPUT_CHANGE", inputId: id, value, isValid });
  }, []);

  return [form, inputHandler];
};
