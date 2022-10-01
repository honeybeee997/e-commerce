import Link from "next/link";
import React, { useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

import styles from "../Navbar.module.css";

const SaleRow = () => {
  const [showSaleRow, setShowSaleRow] = useState(true);

  const saleRowListener = () => {
    const saleRow = document.querySelector(".sale--row");
    saleRow.style.padding = "0px";
    saleRow.style.maxHeight = "0px";
    saleRow.ariaHidden = true;
    setTimeout(() => {
      setShowSaleRow(false);
    }, 1000);
  };

  return (
    showSaleRow && (
      <section
        className={`${styles.saleRow} text-center sale--row`}
        aria-hidden="false"
      >
        <div className={`${styles.topRowsContainer} relative`}>
          <p>
            Today deal sale off <strong>70%</strong>. End in
            <strong>10 days 15:35:15</strong>.{" "}
            <Link href="/sale">
              <a className="inline-flex items-center gap-1 hover:gap-2">
                Hurry up <BsArrowRight />
              </a>
            </Link>
          </p>
          <button className={styles.navRowTimes} onClick={saleRowListener}>
            <FaTimes /> Close
          </button>
        </div>
      </section>
    )
  );
};

export default SaleRow;
