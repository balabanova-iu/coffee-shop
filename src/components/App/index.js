import React from "react";

import Navigation from "../Navigation";
import Title from "../Title";
import AboutUs from "../AboutUs";
import OurBest from "../OurBest";
import Footer from "../Footer";

import styles from "./style.module.css";

function App() {
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

export default App;
