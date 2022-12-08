import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsSquare } from "react-icons/bs";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav>
      <div className={styles.leftlinks}>
        <BsSquare className={styles.square} />
        <span className={styles.link}><b>Medical Darpan</b></span>
      </div>

      <div className={styles.centerlinks}>
        <span className={styles.link}>Home</span>
        <span className={styles.link}>Products</span>
        <span className={styles.link}>Distributors</span>
        <span className={styles.link}>Manufacturers</span>
        <span className={styles.link}>About Us</span>
        <span className={styles.link}>Blog</span>
      </div>

      <div className={styles.rightlinks}>
        <span className={styles.link}>Login</span>
        <BiUserCircle className={styles.userCircle} />
      </div>
    </nav>
  );
}

export default Navbar;
