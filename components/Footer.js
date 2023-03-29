import React from "react";
import styles from "../styles/Navbar.module.css";

function Footer() {
  return (
    <div>
      <footer className={styles.foot}>
        <ul className={styles.footer_items}>
          <li className={styles.list_items}>Home</li>
          <li className={styles.list_items}>About</li>
          <li className={styles.list_items}>Contact</li>
        </ul>
        <h6 className={styles.foot_data}>&copy; All rights reserved</h6>
      </footer>
    </div>
  );
}

export default Footer;
