import React from "react";

import styles from "./forms.module.css";

const Radio = ({ name, id, label, icon, checked, className, ...props }) => {
  return (
    <div
      className={`${styles.radio} ${
        className ? className : ""
      } flex items-center gap-2`}
    >
      <span className="cursor-pointer">
        <input
          type="radio"
          name={name}
          id={id}
          data-target={id}
          value={id}
          className="cursor-pointer"
          onChange={props.onChange}
          checked={checked}
        />
        <span className={styles.customRadio}></span>
      </span>
      <label htmlFor={id} className="flex items-center gap-2 cursor-pointer">
        {icon && icon}
        {label}
      </label>
    </div>
  );
};

export default Radio;
