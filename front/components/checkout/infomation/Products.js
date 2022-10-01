import Image from "next/image";
import React from "react";

import styles from "../checkout.module.css";

const Products = ({ name, quantity, price, image, size }) => {
  return (
    <article className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={styles.checkout_product_image}>
          <Image alt={name} src={image} layout="fill" objectFit="cover" />
          <span className={styles.checkout_product_quantity}>{quantity}</span>
        </div>
        <div className={styles.checkout_productName}>
          <h3>{name}</h3>
          <small>{size}</small>
        </div>
      </div>
      <h3 className="text-sm">$ {price}</h3>
    </article>
  );
};

export default Products;
