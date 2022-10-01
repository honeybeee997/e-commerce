import Link from "next/link";
import React from "react";

import styles from "../checkout.module.css";
import CheckoutDetails from "./CheckoutDetails";

const CheckoutPayment = () => {
  return (
    <article className="flex-auto w-1/2 py-20 pr-8">
      <Link href="/">
        <a>
          <h1 className={styles.heading}>Kalles</h1>
        </a>
      </Link>
      <br />
      <br />
      <hr />
      <div className="pt-8">
        <CheckoutDetails />
      </div>
    </article>
  );
};

export default CheckoutPayment;
