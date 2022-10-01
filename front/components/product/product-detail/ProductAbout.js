import React from "react";

import styles from "./ProductDetail.module.css";

const ProductAbout = ({ title, text }) => {
  return (
    <div className={`mb-3 ${styles.productAbout}`}>
      <p>{title} :</p>
      <small>{text}</small>
    </div>
  );
};

export default ProductAbout;
