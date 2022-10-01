import React from "react";

import { categories } from "../../data";
import CategoriesItem from "./CategoriesItem";

import styles from "./Categories.module.css";

const CatGrid = () => {
  return (
    <section className="categories home-categories-grid py-20">
      <div className="container">
        <div className={styles.categoryGrid}>
          {categories.map((cat, i) => {
            return <CategoriesItem key={i} {...cat} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CatGrid;
