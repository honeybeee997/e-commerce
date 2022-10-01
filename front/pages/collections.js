import Head from "next/head";
import React from "react";
import CategoriesItem from "../components/categories/CategoriesItem";
import MiniBanner from "../components/intro-banners/other/MiniBanner";
import { categoriesPage } from "../data";

import styles from "../components/categories/CategoriesPage.module.css";

const Collections = () => {
  const pageAbout = "Our Collections";
  return (
    <>
      <Head>
        <title>{`Kalles - ${pageAbout}`}</title>
      </Head>
      <MiniBanner image="/images/mini-banner.jpg">{pageAbout}</MiniBanner>
      <section className="py-20">
        <div className={`container ${styles.categoryGrid}`}>
          {categoriesPage.map((item) => {
            return <CategoriesItem key={item.to} {...item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Collections;
