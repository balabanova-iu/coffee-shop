import React from "react";

import { ReactComponent as GroupIconWhite } from "../../icons/group-white.svg";
import styles from "./style.module.css";

const Title = () => {
  return (
    <div className={styles.content_title}>
      <div className={styles.title}>Everything You Love About Coffee</div>
      <GroupIconWhite />
      <div className={styles.text}>
        We makes every day full of energy and taste
      </div>
      <div className={styles.text}>Want to try our beans?</div>
      <button className={styles.button}>More</button>
    </div>
  );
};

export default Title;
