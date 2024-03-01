import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      
      <ul className={styles.ul}>
        <li className="text-blueText">HOME</li>
        <li>BAGS</li>
        <li>SNEAKERS</li>
        <li>BELT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
