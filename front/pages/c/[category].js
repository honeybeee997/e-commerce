import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import MiniBanner from "../../components/intro-banners/other/MiniBanner";
import ProductGrid from "../../components/product/ProductGrid";
import { trending } from "../../data";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <>
      <Head>
        <title>{`Kalles - Collection`}</title>
      </Head>
      <MiniBanner image="/images/mini-banner-1.jpg">
        {`${category?.toUpperCase()}${
          !category?.endsWith("s") ? "'s" : ""
        } COLLECTION`}
      </MiniBanner>
      <ProductGrid
        heading="Products"
        tagline="Many more coming soon"
        products={trending}
      />
    </>
  );
};

export default Category;
