import React from "react";
import { BsFillBagFill, BsGrid } from "react-icons/bs";
import { AiFillRead, AiFillShop } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { MdOutlineLogout } from "react-icons/md";
import LayoutLink from "./LayoutLink";

import styles from "./Admin.module.css";

const Layout = ({ children }) => {
  return (
    <main className="flex items-stretch">
      <aside className="h-auto">
        <ul className={styles.dashNav}>
          <div className="fixed top-0 left-0">
            <h1>Kalles</h1>
            <LayoutLink
              to="/admin/dashboard"
              text="Dashboard"
              icon={<BsGrid />}
            />
            <LayoutLink
              to="/admin/products"
              text="Products"
              icon={<BsFillBagFill />}
            />
            <LayoutLink
              to="/admin/collections"
              text="Collections"
              icon={<AiFillShop />}
            />
            <LayoutLink to="/admin/blogs" text="Blogs" icon={<AiFillRead />} />
            <LayoutLink
              to="/admin/settings"
              text="Settings"
              icon={<FiSettings />}
            />
            <button className={styles.layoutLink}>
              <MdOutlineLogout /> Logout
            </button>
          </div>
        </ul>
      </aside>
      <article className={`p-8 ${styles.layout}`}>{children}</article>
    </main>
  );
};

export default Layout;
