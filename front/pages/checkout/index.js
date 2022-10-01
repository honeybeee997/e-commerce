import Head from "next/head";
import React from "react";

import CartTotal from "../../components/checkout/infomation/CartTotal";
import CartInformation from "../../components/checkout/infomation/Information";
import { cartItems } from "../../data";

const Index = () => {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main>
        <section className="container flex items-stretch min-h-screen">
          <CartInformation />
          <CartTotal items={cartItems} />
        </section>
      </main>
    </>
  );
};

export default Index;
