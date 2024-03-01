import React from "react";
import styles from "./Footer.module.scss";
import { Logo } from "../../assets/svgs/Logo";
import { Facbook } from "../../assets/svgs/Facbook";
import { Twitter } from "../../assets/svgs/Twitter";
import Paypal from "../../assets/svgs/Paypal";
import WesternUnion from "../../assets/svgs/WesternUnion";
import Master from "../../assets/svgs/Master";

const Footer = () => {
  return (
    <div className={styles.container}>
      {/* /////////////////////////////firstRow part/////////////////////////////// */}
      <div className={styles.firstRow}>
        <div className={styles.col1}>
          <div className={styles.Logo}>
            <Logo />
            <h2> E-Comm </h2>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry. Lorem <br /> Ipsum has been the industry's
            standard <br />
            dummy text ever.Since the 1500s, when <br />
            an unknown printer.
          </p>
        </div>

        <div className={styles.col2}>
          <h2> Follow Us</h2>
          <p>
            Since the 1500s, when an unknown <br />
            printer took a galley of type and <br /> scrambled.
          </p>
          <div className={styles.social}>
            <Facbook />
            <Twitter />
          </div>
        </div>

        <div className={styles.col3}>
          <h2>Contact Us</h2>
          <p>
            E-Comm , 4578 <br />
            Marmora Road, <br />
            Glasgow D04 89GR
          </p>
        </div>
      </div>
      {/* /////////////////////////////SecondRow part/////////////////////////////// */}
      <div className={styles.SecondRow}>
        <div className={styles.col}>
          <h2>Infomation</h2>
          <ul>
            <li>About Us </li>
            <li>Infomation</li>
            <li> Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h2>Service</h2>
          <ul>
            <li>About Us </li>
            <li>Infomation</li>
            <li> Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.col}>
          <h2>My Account</h2>
          <ul>
            <li>About Us </li>
            <li>Infomation</li>
            <li> Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.colLast}>
          <h2>Our Offers</h2>
          <ul>
            <li>About Us </li>
            <li>Infomation</li>
            <li> Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div>
        <div className={styles.line}></div>
        {/* /////////////////////////////Third part/////////////////////////////// */}
        <div className={styles.ThirddRow}>
          <p className={styles.text}>
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>

          <div className={styles.pay}>
            <div>
              <WesternUnion />
            </div>
            <div>
              <Master />
            </div>

            <div>
              <Paypal />
            </div>
            <div>
              <WesternUnion />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
