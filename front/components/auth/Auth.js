import React, { useState } from "react";
import { authActions } from "../../store/auth";

import Login from "./login/Index";
import SignUp from "./sign-up/SignUp";
import DrawerPortal from "../extras/Drawer";

import styles from "./auth.module.css";

const Auth = () => {
  const [loginMode, setLoginMode] = useState(true);

  const switchModeHandler = () => {
    setLoginMode((prevMode) => !prevMode);
  };

  return (
    <>
      <DrawerPortal
        closerFn={authActions}
        heading={loginMode ? "Login" : "Sign Up"}
      >
        {loginMode ? <Login /> : <SignUp />}
        <div
          className={`px-6 ${styles.modeSwitcher}`}
          onClick={switchModeHandler}
        >
          <p>
            {loginMode
              ? "New Customer ? Switch to Sign Up"
              : "Already have and account ? Switch to Login"}
          </p>
        </div>
      </DrawerPortal>
    </>
  );
};

export default Auth;
