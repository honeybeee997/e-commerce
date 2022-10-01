import Head from "next/head";
import React from "react";
import Product from "../../components/product/product-detail/Product";
import ProductsSlider from "../../components/product/ProductsSlider";

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>{`Kalles - Product Detail`}</title>
      </Head>
      <Product />
      <ProductsSlider />
    </>
  );
};

export default ProductPage;
