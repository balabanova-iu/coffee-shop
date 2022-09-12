import React from "react";

import styles from "./style.module.css";
import aboutOurBeans from "../../../../images/about-our-beans.jpg";
import { ReactComponent as GroupIconBlack } from "../../../../icons/group-black.svg";
import { ReactComponent as LineBlack } from "../../../../icons/line.svg";

const AboutBeans = () => {
  return (
    <div className={styles.content_main}>
      <div className={styles.content}>
        <div>
          <img src={aboutOurBeans} alt=""></img>
        </div>
        <div className={styles.description}>
          <div className={styles.title}>About our beans</div>
          <GroupIconBlack />
          <div className={styles.text}>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible.
          </div>
          <div className={styles.text}>
            Afraid at highly months do things on at. Situation recommend
            objection do intention so questions. As greatly removed calling
            pleased improve an. Last ask him cold feel met spot shy want.
            Children me laughing we prospect answered followed. At it went is
            song that held help face.
          </div>
        </div>
      </div>
      <LineBlack />
    </div>
  );
};

export default AboutBeans;
