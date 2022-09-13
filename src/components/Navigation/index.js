import React from "react";

import styles from "./style.module.css";
import { ReactComponent as GrainWhite } from "../../icons/grain-white.svg";

const Navigation = () => {
  return (
    <ul className={styles.navigation_list}>
      <GrainWhite />
      <li>
        <a href="/" className={styles.navigation_item}>
          Coffee house
        </a>
      </li>
      <li>
        <a href="/our-coffee" className={styles.navigation_item}>
          Our coffee
        </a>
      </li>
      <li className={styles.navigation_item}>For your pleasure</li>
    </ul>
  );
};

export default Navigation;
