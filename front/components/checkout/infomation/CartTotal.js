import React from "react";

import Products from "./Products";
import styles from "../checkout.module.css";

const CartTotal = ({ items }) => {
  return (
    <article
      className={`flex-auto w-1/2 py-20 px-8 ${styles.checkout_products}`}
    >
      <div className={` flex flex-col gap-4`}>
        {items.map((item, i) => {
          return <Products {...item} key={i} />;
        })}
      </div>
      <div className={styles.checkout_products_calculations}>
        <div className="flex items-center justify-between">
          <span className="text-xs">Subtotal</span>
          <strong className="text-sm">$ 87.00</strong>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs">Shipping</span>
          <strong className="text-sm">$ 87.00</strong>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm">Total</span>
        <div>
          <small>GBP </small>&nbsp;
          <strong className="text-2xl"> $87.00</strong>
        </div>
      </div>
    </article>
  );
};

export default CartTotal;
