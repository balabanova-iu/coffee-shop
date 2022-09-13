import React from "react";

import styles from "./style.module.css";
import { ReactComponent as GroupIconBlack } from "../../icons/group-black.svg";
import { ReactComponent as GrainBlack } from "../../icons/grain-black.svg";

const Footer = () => {
  return (
    <div className={styles.image}>
      <ul className={styles.list}>
        <GrainBlack />
        <li>
          <a href="/" className={styles.item}>
            Coffee house
          </a>
        </li>
        <li>
          <a href="/our-coffee" className={styles.item}>
            Our coffee
          </a>
        </li>
        <li className={styles.item}>For your pleasure</li>
      </ul>

      <GroupIconBlack />
    </div>
  );
};

export default Footer;
