import React from "react";

import Logo from "./Logo";
import Links from "./Links";
import Actions from "./Actions";

import styles from "../Navbar.module.css";

const Navbar = () => {
  return (
    <section className="py-5 bg-white">
      <div
        className={`${styles.topRowsContainer} ${styles.navbar} flex items-center justify-between`}
      >
        <Logo />
        <Links />
        <Actions />
      </div>
    </section>
  );
};

export default Navbar;
