import React from "react";

import Heading from "../extras/Heading";
import ProductGridItem from "./ProductGridItem";

import styles from "./Product.module.css";
import Button from "../extras/Button";
import Dropdown from "./Dropdown";

const ProductGrid = ({ heading, tagline, loadMore, products, filter }) => {
  return (
    <section className="py-20">
      <div className="container relative">
        <Heading tagline={tagline}>{heading}</Heading>
        <div className={`trending-products ${styles.productGrid}`}>
          {products.map((product, i) => (
            <ProductGridItem key={i} {...product} />
          ))}
        </div>
        {loadMore && (
          <div className="load-more text-center pt-10">
            <Button to={loadMore} btnRound>
              Load More
            </Button>
          </div>
        )}
        {filter && <Dropdown />}
      </div>
    </section>
  );
};

export default ProductGrid;
