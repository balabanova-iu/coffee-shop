import React from "react";

import styles from "./style.module.css";

const Sorting = () => {
  return (
    <div className={styles.content}>
      <div>Or filter</div>
      <button>Brazil</button>
      <button>Kenya</button>
      <button>Columbia</button>
    </div>
  );
};

export default Sorting;
