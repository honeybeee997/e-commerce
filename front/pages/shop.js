import Head from "next/head";
import React from "react";

import MiniBanner from "../components/intro-banners/other/MiniBanner";
import ProductGrid from "../components/product/ProductGrid";
import { trending } from "../data";

const Shop = () => {
  return (
    <>
      <Head>
        <title>Kalles - All Products</title>
      </Head>
      <MiniBanner image="/images/mini-banner-1.jpg">OUR INVENTORY</MiniBanner>
      <ProductGrid
        heading="Products"
        tagline="Many more coming soon"
        products={trending}
        filter
      />
    </>
  );
};

export default Shop;
