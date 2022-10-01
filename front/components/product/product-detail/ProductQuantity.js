import React, { useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";

import styles from "./ProductDetail.module.css";

const ProductQuantity = (props) => {
  const [quantity, setQuantity] = useState(props.quantity || 1);

  const quantityIncrementHandler = () => {
    if (quantity <= 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const quantityDecrementHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const quantityChangeHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`flex items-stretch justify-between ${styles.productQuantity_selector}`}
    >
      <button onClick={quantityIncrementHandler}>
        <HiOutlineMinusSm />
      </button>
      <input
        id="number"
        type="number"
        value={quantity}
        onChange={quantityChangeHandler}
      />
      <button onClick={quantityDecrementHandler}>
        <HiOutlinePlusSm />
      </button>
    </div>
  );
};

export default ProductQuantity;
