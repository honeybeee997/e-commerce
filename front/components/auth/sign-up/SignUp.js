import React from "react";
import { useForm } from "../../../hooks/use-form";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
} from "../../../utils/validator";

import Button from "../../extras/Button";
import InputComponent from "../../forms/InputComponent";

const SignUp = () => {
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
        placeholder="First Name"
        name="firstName"
        type="text"
        validators={[VALIDATOR_MAXLENGTH(15), VALIDATOR_MINLENGTH(3)]}
        onInput={inputHandler}
        id="firsName"
        errorText="Please enter a valid first name (3-15 characters)"
      />
      <InputComponent
        placeholder="Last Name"
        name="lastName"
        type="text"
        validators={[VALIDATOR_MAXLENGTH(15), VALIDATOR_MINLENGTH(3)]}
        onInput={inputHandler}
        id="lastName"
        errorText="Please enter a valid last name (3-15 characters)"
      />
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

export default SignUp;
