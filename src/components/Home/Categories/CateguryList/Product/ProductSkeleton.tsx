import React from "react";
import styles from "./Product.module.scss";

export const ProductSkeleton: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.card} group animate-pulse`}>
        {/* Skeleton Loader for Image */}
        <div className={styles.imgContainer}>
          <div className={`${styles.img} bg-gray-300`}></div>
        </div>

        {/* Skeleton Loader for Title */}
        <h2 className={`${styles.title} bg-gray-300`}></h2>

        {/* Skeleton Loader for Price */}
        <div className={styles.wraper}>
          <p className={`${styles.pricediscount} bg-gray-300`}></p>
          <span className={`${styles.price} bg-gray-300`}></span>
          <span className={`${styles.off} bg-gray-300`}></span>
        </div>

        {/* Hover Overlay with Skeleton Loader */}
        <div
          className={`${styles.hoverOvelay} group-hover:opacity-[96%] animate-pulse`}
        >
          <div className={`${styles.selectIcon} bg-gray-300`}>
            {/* Your actual component (e.g., CartProduct) goes here */}
          </div>
          <div className={`${styles.selectIcon} bg-gray-300`}>
            {/* Your actual component (e.g., LikeProduct) goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};
