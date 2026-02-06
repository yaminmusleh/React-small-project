import React from "react";
import styles from "./portfolio.module.css";
import image from "./../imgs/cabin.png";
import image1 from "./../imgs/cake.png";
import image2 from "./../imgs/circus.png";
import image3 from "./../imgs/game.png";
import image4 from "./../imgs/safe.png";
import image5 from "./../imgs/submarine.png";
export default function Portfolio() {
  return (
    <div
      className={` ${styles.portfoliosection} justify-content-center align-items-center d-flex flex-column gap-5`}
    >
      <div>
        <h2  className={styles.title}>Portfolio</h2>
      </div>
      <div className="container d-flex flex-column gap-3">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card rounded-3 overflow-hidden">
              <img src={image} alt="img1" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded-3 overflow-hidden">
              <img src={image1} alt="img2" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded-3 overflow-hidden">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>

        {/* Second row of 3 cards */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card rounded-3 overflow-hidden"><img src={image3} alt="" /></div>
          </div>
          <div className="col-md-4">
            <div className="card rounded-3 overflow-hidden"><img src={image4} alt="" /></div>
          </div>
          <div className="col-md-4">
            <div className="card rounded-3 overflow-hidden"><img src={image5} alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
