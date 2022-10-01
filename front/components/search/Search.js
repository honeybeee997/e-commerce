import React, { useState } from "react";
import reactDom from "react-dom";
import { motion } from "framer-motion";

import styles from "./Search.module.css";

const SearchContent = () => {
  const [input, setInput] = useState("");
  const [showPlaceholder, setShowPlaceHolder] = useState(true);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const base = {
    translateY: "-300%",
    translateX: "-50%",
  };

  return (
    <motion.article
      initial={base}
      animate={{ translateY: 0, translateX: "-50%" }}
      exit={base}
      className={styles.search_wrapper}
    >
      <div className={styles.searchbox}>
        <input
          type="text"
          name="search"
          value={input}
          onChange={inputChangeHandler}
          autoComplete="off"
          onFocus={() => setShowPlaceHolder(false)}
        />
        {showPlaceholder && (
          <span className={styles.search_placeholder}>
            Enter something here to search...
          </span>
        )}
      </div>
    </motion.article>
  );
};

const Search = () => {
  if (typeof window === "object") {
    return reactDom.createPortal(
      <SearchContent />,
      document.querySelector("#__search")
    );
  }
};

export default Search;
