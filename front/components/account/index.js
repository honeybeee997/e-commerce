import React from "react";

import AccountNav from "./AccountNav";

import styles from "./Account.module.css";

const AccountDashboard = () => {
  return (
    <section className="container py-20 flex items-start gap-4">
      <AccountNav />
      <article>
        <h3 className={styles.user_welcom}>Hello User !</h3>
        <strong>Order History :</strong>
        <p className={styles.noOrder}>You havent placed any orders yet</p>
      </article>
    </section>
  );
};

export default AccountDashboard;
