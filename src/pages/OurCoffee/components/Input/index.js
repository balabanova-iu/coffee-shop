import React from "react";

import styles from "./style.module.css";

const Input = () => {
  return (
    <div className={styles.content}>
      <div>Lookiing for</div>
      <input
        type="text"
        placeholder="start typing here..."
        className={styles.input}
      />
    </div>
  );
};

export default Input;
