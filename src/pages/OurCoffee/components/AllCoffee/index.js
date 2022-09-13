import React from "react";

import imageThree from "../../../../images/coffee-three.jpg";

import styles from "./style.module.css";

const AllCoffee = ({ country }) => {
  return (
    <div className={styles.content}>
      <div>
        <img src={imageThree} alt=""></img>
      </div>
      <div>AROMISTICO Coffee 1 kg</div>
      <div>{country}</div>
      <div>6.99$</div>
    </div>
  );
};

export default AllCoffee;
