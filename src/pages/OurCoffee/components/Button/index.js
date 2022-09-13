import React from "react";

import styles from "./style.module.css";

const Button = ({ country }) => {
  return (
    <div className={styles.content}>
      <button className={styles.button}>{country}</button>
    </div>
  );
};

export default Button;
