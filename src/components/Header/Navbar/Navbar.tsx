import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../../assets/svgs/Logo";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <nav
      className={
        currentPath == "/cart"
          ? `${styles.container}  flex justify-between items-center`
          : `${styles.container} flex justify-end items-center`
      }
    >
      {currentPath == "/cart" && (
        <div className={styles.Logo}>
          <Logo />
          <h2> E-Comm </h2>
        </div>
      )}

      <ul className={styles.ul}>
        <li onClick={() => navigate("/")} className="text-blueText">
          HOME
        </li>
        <li>BAGS</li>
        <li>SNEAKERS</li>
        <li>BELT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
