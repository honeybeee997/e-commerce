import Image from "next/image";
import React from "react";

import styles from "./AdvertisementBanner.module.css";

const AdvertisementBanner = (props) => {
  return (
    <section className="py-20">
      <div className="container flex items-stretch gap-4">
        {props.adverts.map((item, i) => {
          return (
            <div
              className={`advert--item relative flex-auto ${styles.advertItem} flex flex-col items-center justify-center`}
              key={i}
            >
              <Image src={item.image} alt={item.heading} layout="fill" />
              <small className="z-10">{item.title}</small>
              <h2 className="z-10">{item.heading}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AdvertisementBanner;
