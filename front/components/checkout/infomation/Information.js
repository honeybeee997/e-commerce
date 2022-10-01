import Link from "next/link";
import React from "react";

import InformationContact from "./InformationContact";
import styles from "../checkout.module.css";

const Information = () => {
  return (
    <>
      <article className="flex-auto w-1/2 py-20 pr-8">
        <Link href="/">
          <a>
            <h1 className={styles.heading}>Kalles</h1>
          </a>
        </Link>
        <br />
        <br />
        <hr />
        <div className="pt-8">
          <InformationContact />
        </div>
      </article>
    </>
  );
};

export default Information;
