import React, { useRef, useState } from "react";

import styles from "./ProductDetail.module.css";
const ProductSizes = ({ sizes }) => {
  const buttonsRef = useRef(null);

  const [size, setSize] = useState(sizes[0]);

  const changleSizeHandler = (e) => {
    const sizeButton = e.target;
    setSize(sizeButton.dataset.value);

    const buttons = [...buttonsRef.current.children];
    buttons.forEach((btn) => btn.classList.remove(styles.productSizes_active));
    sizeButton.classList.add(styles.productSizes_active);
  };
  return (
    <article className="mb-8">
      <strong className={styles.productSizes_selected}>Size: {size}</strong>
      <div className="flex items-center gap-2" ref={buttonsRef}>
        {sizes.map((size, i) => {
          return (
            <button
              key={i}
              type="button"
              className={`${styles.productSizes_size} ${
                i === 0 ? styles.productSizes_active : ""
              }`}
              onClick={changleSizeHandler}
              data-value={size}
            >
              {size}
            </button>
          );
        })}
      </div>
    </article>
  );
};

export default ProductSizes;
