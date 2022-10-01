import React from "react";
import { useForm } from "../../../hooks/use-form";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../../../utils/validator";

import Button from "../../extras/Button";
import InputComponent from "../../forms/InputComponent";

const Index = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const formSubitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <form className="px-6 pt-10 pb-5" onSubmit={formSubitHandler}>
      <InputComponent
        placeholder="Email"
        name="email"
        type="text"
        validators={[VALIDATOR_EMAIL()]}
        onInput={inputHandler}
        id="email"
        errorText="Please enter a valid email"
      />
      <InputComponent
        placeholder="Password"
        name="password"
        type="password"
        validators={[VALIDATOR_MINLENGTH(6)]}
        onInput={inputHandler}
        id="password"
        errorText="Please enter a valid password (min 6 characters)"
      />
      <Button newsletter disabled={!formState.isValid}>
        Login
      </Button>
    </form>
  );
};

export default Index;
