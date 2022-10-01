import React, { useEffect, useState } from "react";

import styles from "./forms.module.css";
const CustomDropdown = (props) => {
  const [country, selectedCountry] = useState("");

  const selectChangeHandler = (e) => {
    selectedCountry(e.target.value);
  };

  const { onChange } = props;

  useEffect(() => {
    onChange(country);
  }, [onChange, country]);

  return (
    <div>
      <select
        placeholder={props.label}
        className={styles.CustomDropdown}
        onChange={selectChangeHandler}
      >
        <option value="" defaultValue={props.label} hidden>
          {props.label}
        </option>
        {props.options?.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CustomDropdown;
