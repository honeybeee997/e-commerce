import React from "react";

import styles from "./ProductDetail.module.css";

const ProductDetail = ({ name, price, detail }) => {
  return (
    <article className={styles.productDetail}>
      <h3 className={styles.productDetail_name}>{name}</h3>
      <p className={styles.productDetail_price}>$ {price}</p>
      <p className={styles.productDetail_text}>{detail}</p>
    </article>
  );
};

export default ProductDetail;
