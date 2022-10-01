import React from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineHeart } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import ProductBadge from "../extras/product/ProductBadge";
import ProductAction from "../extras/product/ProductAction";

import styles from "./Product.module.css";

const ProductGridItem = ({ images, name, price, to, sizes, onSalePrice }) => {
  let salePercentage;

  if (onSalePrice) {
    salePercentage = Math.ceil((+onSalePrice / +price) * 100);
  }

  const productPrice = (
    <div className="product-prices flex items-center gap-3">
      <small className={onSalePrice && "line-through"}>{`$ ${price}`}</small>
      {onSalePrice && (
        <small className={styles.sale_price}>{`$ ${onSalePrice}`}</small>
      )}
    </div>
  );

  return (
    <article className={styles.product_grid_item}>
      <div className="product-images">
        <Link href={to}>
          <a className={styles.product_image_link}>
            {images.map((img, i) => {
              return (
                <Image
                  src={img}
                  key={i}
                  alt={`${name}-img-${i}`}
                  layout="fill"
                  objectFit="cover"
                />
              );
            })}
          </a>
        </Link>
        <button className="add-wishlist" type="button">
          <AiOutlineHeart />
        </button>
        {onSalePrice && (
          <ProductBadge onSale>{`-${salePercentage}%`}</ProductBadge>
        )}
        <div className={styles.product_image_actions}>
          <ProductAction text="Quick View" icon={<AiOutlineEye />} to="#" />
          <ProductAction text="Quick Shop" icon={<BsCart2 />} to="#" />
        </div>
        <div className={styles.product_sizes}>
          <span>{sizes}</span>
        </div>
      </div>
      <div className="product-detail">
        <Link href={to}>
          <a>
            <strong>{name}</strong>
          </a>
        </Link>
        {productPrice}
      </div>
    </article>
  );
};

export default ProductGridItem;
