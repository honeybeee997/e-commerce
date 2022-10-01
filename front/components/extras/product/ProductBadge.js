import React from "react";

import styles from "./ProductBadge.module.css";
const ProductBadge = (props) => {
  return (
    <span
      className={`${styles.productBadge} ${
        props.onSale && styles.onSale
      } flex items-center justify-center`}
    >
      {props.children}
    </span>
  );
};

export default ProductBadge;
