import React, { useState } from "react";

import { BsTelephone } from "react-icons/bs";
import { BiEnvelope } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

import styles from "../Navbar.module.css";

const CurrencyRow = () => {
  const [isCurrencyListVisible, setIsCurrencyVisible] = useState(false);

  const currencyDropHandler = () => {
    setIsCurrencyVisible((prevState) => !prevState);

    const currencyList = document.querySelector(".currency--list-items");
    if (isCurrencyListVisible) {
      currencyList.style.display = "none";
      currencyList.ariaHidden = true;
    } else {
      currencyList.style.display = "block";
      currencyList.ariaHidden = false;
    }
  };

  const hideCurrencyList = {
    display: "none",
  };

  return (
    <section className={`${styles.currency_row} `}>
      <div
        className={`${styles.topRowsContainer} flex items-center justify-between py-3`}
      >
        <div className="contact top-contact flex items-center gap-4">
          <span className="flex items-center gap-2">
            <BsTelephone />
            +01 23456789
          </span>
          <span className="flex items-center gap-2">
            <BiEnvelope />
            Kalles@domain.com
          </span>
        </div>
        <div className="mini-sale">
          <p>
            Summer sale discount off <span className="text-red">50%!</span>
            <span className="text-black"> Shop Now</span>
          </p>
        </div>
        <div className="flex justify-end">
          <div className={`${styles.dropParent} relative`}>
            <div
              className="drop-trigger flex items-center gap-2 cursor-pointer select-none hover:text-blue"
              onClick={currencyDropHandler}
            >
              <span className="flag usa-flag"></span>
              <small>USD</small>
              <BiChevronDown />
            </div>
            <ul
              className="drop-child currency--list-items select-none"
              aria-hidden="true"
              style={hideCurrencyList}
            >
              <li>
                <button
                  type="button"
                  className={`flex items-start gap-2 ${styles.currency} ${styles.currencyActive}`}
                >
                  <span className="flag usa-flag"></span>
                  <small>USD</small>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`flex items-start gap-2 ${styles.currency}`}
                >
                  <span className="flag nz-flag"></span>
                  <small>NZD</small>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`flex items-start gap-2 ${styles.currency}`}
                >
                  <span className="flag britain-flag"></span>
                  <small>GBP</small>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={`flex items-start gap-2 ${styles.currency}`}
                >
                  <span className="flag canada-flag"></span>
                  <small>CAD</small>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrencyRow;
