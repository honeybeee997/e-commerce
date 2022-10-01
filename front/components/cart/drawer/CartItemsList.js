import React from "react";

import CartItem from "./CartItem";
import { cartItems } from "../../../data";

import styles from "../Cart.module.css";

const CartItemsList = () => {
  return (
    <div className={styles.CartItemsList_wrapper}>
      {cartItems.map((item, i) => {
        return <CartItem {...item} key={i} />;
      })}
    </div>
  );
};

export default CartItemsList;
