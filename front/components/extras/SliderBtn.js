import React from "react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import styles from "./SliderBtn.module.css";

const SliderBtn = (props) => {
  return (
    <span className={styles.sliderBtn} onClick={props.onClick}>
      {props.left ? <FaChevronLeft /> : <FaChevronRight />}
    </span>
  );
};

export default SliderBtn;
