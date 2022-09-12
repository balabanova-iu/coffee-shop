import React from "react";

import Navigation from "../../components/Navigation";
import Title from "./components/Title";
import AboutBeans from "./components/AboutBeans";
import Seach from "./components/Search";
import Sorting from "./Sorting";

import styles from "./style.module.css";

function OurCoffee() {
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <Navigation />;
        <Title />;
      </div>
      <AboutBeans />
      <div className={styles.seach}>
        <Seach />
        <Sorting />
      </div>
    </div>
  );
}

export default OurCoffee;
