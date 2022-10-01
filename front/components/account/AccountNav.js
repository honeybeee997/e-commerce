import React from "react";

import { MdOutlineWindow } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { IoLogOutOutline } from "react-icons/io5";

import AccountNavItem from "./AccountNav/AccountNavItem";

import styles from "./Account.module.css";

const AccountNav = () => {
  return (
    <ul className={styles.navList}>
      <AccountNavItem
        to="/account"
        text="Dashboard"
        icon={<MdOutlineWindow />}
      />
      <AccountNavItem
        to="/wishlist"
        text="Wishlist"
        icon={<AiOutlineHeart />}
      />
      <AccountNavItem
        to="/account/settings"
        text="Settings"
        icon={<FiSettings />}
      />
      <button className={styles.logoutButton}>
        <IoLogOutOutline /> Logout
      </button>
    </ul>
  );
};

export default AccountNav;
