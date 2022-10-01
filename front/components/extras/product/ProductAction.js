import Link from "next/link";
import React from "react";

import styles from "./ProductAction.module.css";

const ProductAction = (props) => {
  return (
    <Link href={props.to}>
      <a className={styles.action}>
        <span className={styles.actionName}>{props.text}</span>
        <span className={styles.actionIcon}>{props.icon}</span>
      </a>
    </Link>
  );
};

export default ProductAction;
