import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "../Account.module.css";

const AccountNavItem = ({ to, text, icon }) => {
  const router = useRouter();

  const activeLink = router.pathname === to ? styles.active : "";

  return (
    <li className={`${styles.navList_item} ${activeLink}`}>
      <Link href={to}>
        <a className="flex items-center gap-2">
          {icon && icon} {text}
        </a>
      </Link>
    </li>
  );
};

export default AccountNavItem;
