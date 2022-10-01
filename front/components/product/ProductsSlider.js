import React from "react";
import Slider from "react-slick";
import { trending } from "../../data";
import SliderBtn from "../extras/SliderBtn";
import ProductGridItem from "./ProductGridItem";

import styles from "./Product.module.css";
import Heading from "../extras/Heading";

const ProductsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SliderBtn />,
    prevArrow: <SliderBtn left />,
  };

  return (
    <section className="py-20">
      <div className="container">
        <Heading tagline="Scroll them they're good">You may also like</Heading>
        <Slider {...settings} className={styles.product_slider}>
          {trending.map((item, i) => {
            return <ProductGridItem key={i} {...item} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ProductsSlider;
