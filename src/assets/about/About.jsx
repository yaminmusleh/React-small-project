import React from "react";
import styles from "./about.module.css";
export default function About() {
  return (
    <div
      className={`${styles.aboutsection} text-center justify-content-center align-items-center d-flex flex-column`}
    >
      <div className={styles.title}>
        <h2 >About</h2>
      </div>
      <div className={`${styles.description} row text-start`}>
        <div className="col-6">
          <span>
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </span>
        </div>
        <div className="col-6">
          <span>
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </span>
        </div>
      </div>
    </div>
  );
}
