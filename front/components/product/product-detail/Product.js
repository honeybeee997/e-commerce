import React from "react";
import { productImages } from "../../../data";
import ProductAbout from "./ProductAbout";
import ProductActions from "./ProductActions";
import ProductDetail from "./ProductDetail";
import ProductImages from "./ProductImages";
import ProductSizes from "./ProductSizes";

const Product = () => {
  return (
    <section className="py-20">
      <div className="container flex items-center gap-12">
        <div className="product--detail_views w-1/2">
          <ProductImages images={productImages} />
        </div>

        <div className="product--detail_texts w-1/2">
          <ProductDetail
            name="Ridley High Waist"
            price="33.00"
            detail="Go kalles this summer with this vintage navy and white striped v-neck t-shirt from the Nike. Perfect for pairing with denim and white kicks for a stylish kalles vibe."
          />
          <ProductSizes sizes={["SM", "MD", "LG", "XL"]} />
          <ProductActions />
          <ProductAbout title="Availability" text="In Stock" />
          <ProductAbout title="Category" text="Women" />
          <ProductAbout
            title="Tags"
            text="Color White, Color Black, Price $7-$50, Size L, Size M, Size S, Vendor Kalles, women"
          />
        </div>
      </div>
    </section>
  );
};

export default Product;
