import React from "react";

import styles from "./Heading.module.css";

const Heading = (props) => {
  return (
    <article className={` heading-wrap ${styles.heading}`}>
      <h3 className="flex justify-center items-center gap-7">
        {props.children}
      </h3>
      {props.tagline && <small>{props.tagline}</small>}
    </article>
  );
};

export default Heading;
