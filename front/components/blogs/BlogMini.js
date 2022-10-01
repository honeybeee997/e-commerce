import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./BlogsMini.module.css";

const BlogMini = ({ title, image, url, author, date, excerpt }) => {
  return (
    <article>
      <Link href={url}>
        <a>
          <div className={styles.blogItem_image_wrapper}>
            <div className={styles.blogItem_image}>
              <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </div>
          </div>
        </a>
      </Link>
      <div className={styles.blogItem_title}>
        <Link href={url}>
          <a>
            <h3>{title}</h3>
          </a>
        </Link>

        <small>
          By
          <span> {author} </span>
          on
          <span> {date}</span>
        </small>
      </div>
      <div className={styles.blogItem_text}>
        <p>{excerpt}</p>
      </div>
    </article>
  );
};

export default BlogMini;
