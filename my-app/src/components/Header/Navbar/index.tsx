import React from "react";
import styles from "./Navbar.module.scss";

const Component = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbarW}>
        <h3 className={styles.title}>
          <a href="./">charlessbl.dev</a>
        </h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <a href="./">About</a>
          </li>
          <li className={styles.item}>
            <a href="./">GitHub</a>
          </li>
          <li className={styles.item}>
            <a href="./">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

const Navbar = React.memo(Component);

export default Navbar;
