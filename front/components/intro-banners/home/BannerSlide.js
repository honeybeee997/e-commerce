import Image from "next/image";
import React from "react";

import Button from "../../extras/Button";

import styles from "../Banners.module.css";

const BannerSlide = ({ title, heading, to, imageUrl }) => {
  return (
    <article className={`${styles.bannerSlide} banner banner-intro-home`}>
      <div className="container h-full flex items-center relative z-10">
        <div className="slider-content-wrap">
          <h3>{title}</h3>
          <h2 className="mt-1 my-5">{heading}</h2>
          <div className="action slide-action">
            <Button to={to}>Explore Now</Button>
          </div>
        </div>
      </div>
      <Image
        src={imageUrl}
        alt="Banner Slide"
        layout="fill"
        priority
        objectFit="cover"
      />
    </article>
  );
};

export default BannerSlide;
