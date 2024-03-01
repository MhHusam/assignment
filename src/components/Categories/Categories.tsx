import React from "react";
import styles from "./Categories.module.scss";
import CateguryList from "./CateguryList/CateguryList";

const Categories = () => {
  return (
    <div className={styles.container}>
      <h1>BEST SELLER</h1>
      <ul className={styles.ul}>
        <li className="text-blueText">All </li>
        <li>Bags</li>
        <li>Sneakers</li>
        <li>Belt</li>
        <li>Sunglasses</li>
      </ul>
      <CateguryList />
    </div>
  );
};

export default Categories;
