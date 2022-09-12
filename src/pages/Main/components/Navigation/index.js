import React from "react";

import styles from "./style.module.css";
import { ReactComponent as GrainWhite } from "../../../../icons/grain-white.svg";

const Navigation = () => {
  return (
    <ul className={styles.navigation_list}>
      <GrainWhite />
      <li className={styles.navigation_item}>Coffee house</li>
      <li className={styles.navigation_item}>Our coffee</li>
      <li className={styles.navigation_item}>For your pleasure</li>
    </ul>
  );
};

export default Navigation;
