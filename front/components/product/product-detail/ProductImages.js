import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

import SliderBtn from "../../extras/SliderBtn";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./ProductDetail.module.css";

const ProductImages = ({ images }) => {
  const sliderRef = useRef();
  const imagesList = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderBtn />,
    prevArrow: <SliderBtn left />,
    beforeChange: function (_, e) {
      const images = [...imagesList.current.children];
      images.forEach((image) => {
        if (image.dataset.slickTo === e.toString()) {
          image.classList.add(styles.imageActive);
        } else {
          image.classList.remove(styles.imageActive);
        }
      });
    },
  };

  const slickGoToHandler = (e) => {
    const slider = sliderRef.current;
    const goTo = e.target.closest("div").dataset.slickTo;
    slider.slickGoTo(goTo, true);
  };

  return (
    <article className="flex items-start gap-3">
      <div className={styles.productView_list} ref={imagesList}>
        {images.map((image, i) => {
          return (
            <div
              key={i}
              className={`${styles.productView_list_image} ${
                i === 0 ? styles.imageActive : ""
              }`}
              data-slick-to={i}
              onClick={slickGoToHandler}
            >
              <Image
                src={image}
                alt="Product view mini"
                layout="fill"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>

      <div className={styles.productView_mega}>
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, i) => {
            return (
              <div key={i} className={styles.productView_mega_image}>
                <Image
                  src={image}
                  alt="Product view mini"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            );
          })}
        </Slider>
        {/* <div
          ref={rightArrowRef}
          className={`${styles.productView_sliderBtn} ${styles.productView_sliderBtn_right}`}
        >
          <SliderBtn />
        </div>
        <div
          ref={leftArrowRef}
          className={`${styles.productView_sliderBtn} ${styles.productView_sliderBtn_left}`}
        >
          <SliderBtn left />
        </div> */}
      </div>
    </article>
  );
};

export default ProductImages;
