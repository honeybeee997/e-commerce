import { motion } from "framer-motion";
import React from "react";
import reactDom from "react-dom";
import { useDispatch } from "react-redux";
import { backdropActions } from "../../store/backdrop";

import styles from "./Drawer.module.css";

const Drawer = ({ heading, className, onClick, children, closerFn }) => {
  const disptach = useDispatch();

  const drawerCloseHandler = () => {
    disptach(backdropActions.close());
    disptach(closerFn.close());
  };

  return (
    <motion.aside
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      exit={{ translateX: "100%" }}
      className={`${styles.drawer} ${className ? className : ""}`}
      onClick={onClick}
    >
      <div className={styles.drawer_heading}>
        <h3>{heading}</h3>
        <button className={styles.drawer_close} onClick={drawerCloseHandler}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </button>
      </div>
      {children}
    </motion.aside>
  );
};

const DrawerPortal = (props) => {
  if (typeof window === "object") {
    return reactDom.createPortal(
      <Drawer {...props} />,
      document.getElementById("__drawer")
    );
  }
};

export default DrawerPortal;
