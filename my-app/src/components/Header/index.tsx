import React from "react";
import Navbar from "./Navbar";
import styles from "./Header.module.scss";

import App from "./App/App";
import Slider from "./Slider";

export default function Header() {
  return (
    <div className={styles.root}>
      <Navbar></Navbar>
      <section>
        <div className={styles.appLeft}>
          <div className={styles.title}>
            <h1>
              Frontend <br /> <span>Developer</span>
            </h1>
            <h3>Hello World!</h3>
          </div>
          <div className={styles.body}>
            <p>
              Welcome to my website, here you can learn some useful information
              about me.
            </p>
            <button>Contact Me</button>
          </div>
        </div>
        <div className={styles.appRight}>
          {/* <App></App> */}
          <Slider></Slider>
        </div>
      </section>
    </div>
  );
}
