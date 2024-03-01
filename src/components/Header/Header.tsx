import React from "react";
import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.scss";
import Cart from "../../assets/svgs/Cart";
import { Search } from "../../assets/svgs/Search";
import ProfileLogo from "../../assets/svgs/ProfileLogo";
import ArrowdownSvg from "../../assets/svgs/ArrowdownSvg";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.headContainer}>
        {/* ////////////////////////////////leftElements///////////////////// */}
        <div className={styles.leftElements}>
          <div className={styles.lang}>
            <span>EN</span>
            <ArrowdownSvg />
          </div>
          <div className={styles.lang}>
            <span>USD</span>
            <ArrowdownSvg />
          </div>
        </div>
        {/* ////////////////////////////////rightElements///////////////////// */}
        <div className={styles.rightElements}>
          <div className={styles.profile}>
            <ProfileLogo />
            <span className={styles.element}>My profile</span>
          </div>

          <div>
            <Cart />
          </div>

          <div className={styles.element}> Items</div>

          <div className={styles.search}>
            <div className={styles.elementCount}>$0.00</div>
            <Search />
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <Navbar />
    </header>
  );
};

export default Header;
