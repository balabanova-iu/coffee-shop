import React from "react";

import imageOne from "../../../../images/coffee-one.jpg";
import imageTwo from "../../../../images/coffee-two.jpg";
import imageThree from "../../../../images/coffee-three.jpg";

import styles from "./style.module.css";

const OurBest = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>Our best</div>
      <div className={styles.content_list}>
        <div className={styles.content_item}>
          <img src={imageOne} alt=""></img>
          <div>Solimo Coffee Beans 2 kg</div>
          <div>10.73$</div>
        </div>
        <div className={styles.content_item}>
          <img src={imageTwo} alt=""></img>
          <div>Presto Coffee Beans 1 kg</div>
          <div>15.99$</div>
        </div>
        <div className={styles.content_item}>
          <img src={imageThree} alt=""></img>
          <div>AROMISTICO Coffee 1 kg</div>
          <div>6.99$</div>
        </div>
      </div>
    </div>
  );
};

export default OurBest;
