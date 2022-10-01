import React from "react";
import Button from "../../extras/Button";

import styles from "../Footer.module.css";

const NewsLetter = () => {
  return (
    <form className={styles.newsletter}>
      <input type="email" placeholder="Your email address" name="email" />
      <Button newsletter>Subscribe</Button>
    </form>
  );
};

export default NewsLetter;
