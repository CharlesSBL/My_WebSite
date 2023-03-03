import React from "react";
import Buble from "./Buble";
import styles from "./Promo.module.scss";

export default function Promo() {
  return (
    <div>
      <section className={styles.root}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h1 className={styles.number}>1</h1>
            <div className={styles.about}>
              <h3>Interfaces</h3>
              <p>As user friendly as possible</p>
            </div>
          </li>
          <li className={styles.item}>
            <h1 className={styles.number}>2</h1>
            <div className={styles.about}>
              <h3>Websites</h3>
              <p>Easy to use and easy to look at</p>
            </div>
          </li>
          <li className={styles.item}>
            <h1 className={styles.number}>3</h1>
            <div className={styles.about}>
              <h3>Visuals</h3>
              <p>Clarity and transparency</p>
            </div>
          </li>
        </ul>
        <Buble></Buble>
      </section>
    </div>
  );
}
