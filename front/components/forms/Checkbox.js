import React, { useEffect, useState } from "react";
import { BsCheckLg } from "react-icons/bs";

import styles from "./forms.module.css";

const Checkbox = (props) => {
  const [checked, setChecked] = useState(props.checked || false);

  const checkChangeHandler = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  const { onChange } = props;

  useEffect(() => {
    onChange(checked);
  }, [checked, onChange]);

  return (
    <div
      className={`${props.className ? props.className : ""} ${styles.checkbox}`}
    >
      <div className="relative">
        <input
          type="checkbox"
          name={props.name}
          id={props.id}
          checked={checked}
          onChange={checkChangeHandler}
        />
        <span className={styles.custom_check}>
          <BsCheckLg />
        </span>
      </div>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};

export default Checkbox;
