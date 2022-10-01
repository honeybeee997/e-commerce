import Link from "next/link";
import React from "react";

import styles from "../checkout.module.css";

const CheckoutDetails = () => {
  return (
    <article className={styles.checkout_card}>
      <div className="flex items-center justify-between">
        <div>
          <span>Contact</span>
          <span>ahmedmuneeb997@gmail.com</span>
        </div>
        <Link href="/checkout">
          <a>change</a>
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span>Shipping</span>
          <span>1733 Twin Willow Lane, Wilmington NC 28403, United States</span>
        </div>
        <Link href="/checkout">
          <a>change</a>
        </Link>
      </div>
    </article>
  );
};

export default CheckoutDetails;
