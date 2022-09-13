import React from "react";

import Navigation from "../../components/Navigation";
import AboutBeans from "./components/AboutBeans";
import Input from "./components/Input";
import Button from "./components/Button";
import AllCoffee from "./components/AllCoffee";
import Footer from "../../components/Footer";

import styles from "./style.module.css";

function OurCoffee() {
  return (
    <div className={styles.content}>
      <div className={styles.image}>
        <Navigation />
        <div className={styles.title}>Our Coffee</div>;
      </div>
      <AboutBeans />
      <div className={styles.seach}>
        <Input />
        <div className={styles.sorting}>
          <span className={styles.title_button}>Or filter</span>
          <Button country="Brazil" />
          <Button country="Kenya" />
          <Button country="Columbia" />
        </div>
      </div>
      <div className={styles.all_coffee}>
        <AllCoffee country="Brazil" />
        <AllCoffee country="Kenya" />
        <AllCoffee country="Columbia" />
        <AllCoffee country="Brazil" />
        <AllCoffee country="Brazil" />
        <AllCoffee country="Brazil" />
      </div>
      <Footer />
    </div>
  );
}

export default OurCoffee;
