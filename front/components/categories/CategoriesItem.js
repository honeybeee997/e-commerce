import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../extras/Button";

import styles from "./Categories.module.css";

const CategoriesItem = ({ category, image, to }) => {
  return (
    <article className={`h-full w-full relative ${styles.categoryItem}`}>
      <Link href={to}>
        <a className="relative h-full block w-full">
          <Image
            src={image}
            alt="Category Image"
            layout="fill"
            objectFit="cover"
          />
        </a>
      </Link>

      <div className={styles.categoriesAction}>
        <Button to={to} btnInverse>
          {category}
        </Button>
      </div>
    </article>
  );
};

export default CategoriesItem;
