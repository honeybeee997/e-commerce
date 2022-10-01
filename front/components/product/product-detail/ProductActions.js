import React from "react";

import Button from "../../extras/Button";

import { AiFillHeart } from "react-icons/ai";

import styles from "./ProductDetail.module.css";
import ProductQuantity from "./ProductQuantity";

const ProductActions = () => {
  return (
    <article className="flex items-stretch gap-4 mb-5">
      <ProductQuantity />
      <Button newsletter>Add To Cart</Button>
      <div className="relative">
        <button className={styles.productActions_wishlist}>
          <span className={styles.tooltip}>Add to wishlist</span>
          <AiFillHeart />
        </button>
      </div>
    </article>
  );
};

export default ProductActions;
