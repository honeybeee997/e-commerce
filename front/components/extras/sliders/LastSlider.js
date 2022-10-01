import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { slides } from "../../../data";
import Heading from "../Heading";

import styles from "./LastSlider.module.css";

const LastSlider = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="slider-before-footer mt-20">
      <Heading>@ FOLLOW US ON INSTAGRAM</Heading>
      <Slider {...settings} className={`mt-12 ${styles.lastSlider}`}>
        {slides.map((image, i) => {
          return (
            <div key={i} className={styles.img_wrap}>
              <Image
                src={image}
                alt="Slide Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default LastSlider;
