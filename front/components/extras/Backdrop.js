import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { backdropActions } from "../../store/backdrop";
import { authActions } from "../../store/auth";
import { searchActions } from "../../store/search";
import { cartActions } from "../../store/cart";

import styles from "./Backdrop.module.css";

const Backdrop = () => {
  const { showBackdrop } = useSelector((state) => state.backdrop);
  const disptach = useDispatch();

  const backdropCloseHandler = () => {
    disptach(backdropActions.close());
    disptach(authActions.close());
    disptach(searchActions.close());
    disptach(cartActions.close());
  };

  return (
    showBackdrop && (
      <div
        className={styles.backdrop}
        onClick={backdropCloseHandler}
        id="__backdrop"
      ></div>
    )
  );
};

export default Backdrop;
