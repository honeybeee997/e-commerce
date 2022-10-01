import React from "react";

import styles from "../Footer.module.css";

const FooterService = ({ icon, heading, text }) => {
  return (
    <article className={styles.footerService}>
      <span>{icon}</span>
      <div>
        <strong>{heading}</strong>
        <small>{text}</small>
      </div>
    </article>
  );
};

export default FooterService;
