import React from "react";

import styles from "../Banners.module.css";

const MiniBanner = (props) => {
  return (
    <div
      className={styles.miniBanner}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      <h2>{props.children}</h2>
    </div>
  );
};

export default MiniBanner;
