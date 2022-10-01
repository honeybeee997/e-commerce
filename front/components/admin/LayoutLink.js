import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import styles from "./Admin.module.css";

const LayoutLink = (props) => {
  const router = useRouter();

  const path = router.pathname;

  const active = path.includes(props.to);

  return (
    <li>
      <Link href={props.to}>
        <a
          className={`flex items-center gap-2 ${styles.layoutLink} ${
            active ? styles.linkActive : ""
          }`}
        >
          {props.icon} {props.text}
        </a>
      </Link>
    </li>
  );
};

export default LayoutLink;
