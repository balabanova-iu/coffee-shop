import React from "react";

import Navigation from "../../components/Navigation";
import Title from "./components/Title";
import AboutUs from "./components/AboutUs";
import OurBest from "./components/OurBest";
import Footer from "../../components/Footer";

import styles from "./style.module.css";

function Main() {
  return (
    <div className={styles.content}>
      <div className={styles.content_img}>
        <Navigation />
        <Title />
      </div>
      <AboutUs />
      <OurBest />
      <Footer />
    </div>
  );
}

export default Main;
