import Head from "next/head";
import React from "react";

import MiniBanner from "../components/intro-banners/other/MiniBanner";
import ProductGrid from "../components/product/ProductGrid";
import { trending } from "../data";

const Wishlist = () => {
  return (
    <>
      <Head>
        <title>Kalles - Wishlist</title>
      </Head>
      <MiniBanner image="/images/mini-banner-1.jpg">
        Wishlist - View your liked products
      </MiniBanner>
      <ProductGrid heading="Whishlist Products" products={trending} />
    </>
  );
};

export default Wishlist;
