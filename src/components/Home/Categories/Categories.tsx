import React, { useEffect, useState } from "react";
import styles from "./Categories.module.scss";
import CateguryList from "./CateguryList/CateguryList";
import { fetchAllCategories } from "../../../api";

const Categories = () => {
  const [categories, setCategories] = useState<any>([]);

  const fetchData = async () => {
    const data = await fetchAllCategories();
    setCategories(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1>BEST SELLER</h1>
      <ul className={styles.ul}>
        <li className="text-blueText">All </li>
        {categories.map((item: any, index: any) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <CateguryList />
    </div>
  );
};

export default Categories;
