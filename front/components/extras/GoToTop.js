import React, { useEffect } from "react";

import { BsChevronUp } from "react-icons/bs";

import styles from "./GoToTop.module.css";

const GoToTop = () => {
  const goToTopHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      document
        .querySelector(".go-to-top")
        .classList.toggle("show-go-to-top", window.scrollY > 500);
    });
  }, []);

  return (
    <div className={`go-to-top ${styles.go_to_top}`} onClick={goToTopHandler}>
      <BsChevronUp />
    </div>
  );
};

export default GoToTop;
