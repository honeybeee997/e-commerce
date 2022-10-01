import Head from "next/head";
import React from "react";
import CartTotal from "../../components/checkout/infomation/CartTotal";
import CheckoutPayment from "../../components/checkout/payment/CheckoutPayment";
import { cartItems } from "../../data";

const Payment = () => {
  return (
    <>
      <Head>
        <title>Kalles - Checkout Payment</title>
      </Head>
      <main>
        <section className="container flex items-stretch min-h-screen">
          <CheckoutPayment />
          <CartTotal items={cartItems} />
        </section>
      </main>
    </>
  );
};

export default Payment;
