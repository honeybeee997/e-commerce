import React from "react";
import Slider from "react-slick";

import BannerSlide from "./BannerSlide";

import { homeBanners } from "../../../data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <section className={`section-intro intro--banner`}>
      <Slider {...settings} className="home-intro-slick">
        {homeBanners.map((bannerSlide, i) => {
          return (
            <BannerSlide
              key={i}
              title={bannerSlide.title}
              heading={bannerSlide.heading}
              imageUrl={bannerSlide.imageUrl}
              to={bannerSlide.to}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default Banner;
