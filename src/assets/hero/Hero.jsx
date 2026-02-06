import React from "react";
import styles from "./hero.module.css";
import image from "./../imgs/avataaars.svg";
export default function Hero() {
  return (
    <div className={` ${styles.herosection} text-center justify-content-center align-content-center d-flex flex-column gap-4`}>
      <div className="img">
        <img src={image} alt="avatar" className={styles.width} />
      </div>
      <div className={styles.desc}>
        <p>Start Bootstrap</p>
        <p className={styles.descsmall}>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
