import Image from "next/image";
import React from "react";

import { BsTrash } from "react-icons/bs";

import ProductQuantity from "../../product/product-detail/ProductQuantity";

import styles from "../Cart.module.css";

const CartItem = (props) => {
  return (
    <article className={styles.cartItem}>
      <div className={styles.cartItem_image}>
        <Image
          src={props.image}
          alt={props.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.cartItem_detail}>
        <h3>{props.name}</h3>
        <small>{props.size}</small>
        <span className={styles.cartItem_price}>$ {props.price}</span>
        <ProductQuantity quantity={props.quantity} />
        <div className={styles.cartItem_remove}>
          <button type="button">
            <BsTrash />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
