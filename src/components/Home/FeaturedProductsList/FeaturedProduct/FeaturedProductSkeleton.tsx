import React from "react";

import styles from "./FeaturedProduct.module.scss";

const FeaturedProductSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} animate-pulse`}>
        {/* Skeleton Loader for Image */}
        <div className={styles.imgContainer}>
          <div className={`${styles.img} bg-gray-300`}></div>
        </div>

        {/* Skeleton Loader for Title and Price */}
        <div>
          <div className={`${styles.title} bg-gray-300 mb-2`}></div>
          <div className={styles.wraper}>
            <span className={`${styles.off} bg-gray-300`}></span>
            <p className={`${styles.price} bg-gray-300`}></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProductSkeleton;
