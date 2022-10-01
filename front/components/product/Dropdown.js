import Link from "next/link";
import React, { useState } from "react";

import { BsChevronDown } from "react-icons/bs";

import styles from "./Product.module.css";

const Dropdown = () => {
  const [dropDownText, setDropDownText] = useState("Sort by");

  const dropdownHandler = (e) => {
    const theDropParent = e.target.closest("article");
    theDropParent.classList.toggle(styles.openDropdown);
  };

  const changeDropText = (e) => {
    setDropDownText(e.target.innerText);

    const parentList = e.target.closest("ul");
    const clickedItem = e.target.closest("li");
    const dropdownItems = Array.from(parentList.querySelectorAll("li"));
    dropdownItems.forEach((item) => {
      item.removeAttribute("class");
    });
    clickedItem.classList.add(styles.filterActive);
  };

  return (
    <article className={`${styles.customDropdown}`} onClick={dropdownHandler}>
      <div className="flex items-center justify-between w-full">
        <h3>{dropDownText}</h3> <BsChevronDown />
      </div>
      <ul>
        <li>
          <Link href="?sort=asc">
            <a onClick={changeDropText}>Price Low to High</a>
          </Link>
        </li>
        <li>
          <Link href="?sort=desc">
            <a onClick={changeDropText}>Price High to Low</a>
          </Link>
        </li>
        <li>
          <Link href="?sort=bestselling">
            <a onClick={changeDropText}>Bestselling</a>
          </Link>
        </li>
        <li>
          <Link href="?sort=newest">
            <a onClick={changeDropText}>Newest Added</a>
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default Dropdown;
