import Link from "next/link";
import React from "react";

import { AiFillHeart } from "react-icons/ai";
import styles from "./Footer.module.css";

const FooterBottom = () => {
  return (
    <section className={styles.footerBottom}>
      <div className="container flex items-center justify-between">
        <p>
          Copyright © 2022
          <a href="https://demo-kalles-4-1.myshopify.com/"> Kalles. </a> All
          rights reserved
        </p>
        <p>
          Made with <AiFillHeart /> by
          <Link href="mailto:puzzlingsheep@gmail.com">
            <a>Muneeb</a>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default FooterBottom;
