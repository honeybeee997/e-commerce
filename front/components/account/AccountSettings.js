import React from "react";
import AccountNav from "./AccountNav";

import styles from "./Account.module.css";
import Link from "next/link";

const AccountSettings = () => {
  return (
    <section className="container py-20 flex items-start gap-4">
      <AccountNav />

      <article className={styles.checkout_card}>
        <div className="flex items-center justify-between">
          <div>
            <span>Name</span>
            <span>Muneeb Ahmed</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span>Email</span>
            <span>ahmedmuneeb997@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span>Email</span>
            <span>ahmedmuneeb997@gmail.com</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AccountSettings;
