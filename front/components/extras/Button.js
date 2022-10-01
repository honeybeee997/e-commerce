import Link from "next/link";
import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
  if (props.newsletter) {
    return (
      <button
        type="submit"
        onClick={props.onClick}
        className={`${styles.newsletter} ${
          props.className ? props.className : ""
        }`}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    );
  }

  if (props.btnRound) {
    return (
      <Link href={props.to}>
        <a className={styles.btnRound}>{props.children}</a>
      </Link>
    );
  }

  return (
    <Link href={props.to}>
      <a
        className={`${styles.btn} ${props.btnInverse && styles.btnInverse}`}
        onClick={props.onClick}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default Button;
