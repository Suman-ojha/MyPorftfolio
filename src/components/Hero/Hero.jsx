import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const cv_link = 'https://www.canva.com/design/DAFGab_dmPE/Ha8NofQGBMszZdsyAwhD9A/view?utm_content=DAFGab_dmPE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Suman Ojha</h1>
        <p className={styles.description}>
          I'm a Mern-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className="box">
       
        <a href="mailto:sumanojha1999@gmail.com" className={styles.contactBtn} style={{margin:'10px'}}>
          Contact Me
        </a>

        
       

        <a href={cv_link} target='_' className={styles.contactBtn}>
          Resume
        </a>
       

        </div>
      </div>
      
      <img
        src={getImageUrl("hero/heroImage.png")}
        // src={getImageUrl("hero/sman.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
