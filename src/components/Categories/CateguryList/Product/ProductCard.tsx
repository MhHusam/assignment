import React from "react";
import styles from "./Product.module.scss";
import { ProductShap } from "../../../../app/features/Product/productSlice";
import CartProduct from "../../../../assets/svgs/CartProduct";
import LikeProduct from "../../../../assets/svgs/LikeProduct";

export const ProductCard: React.FC<ProductShap> = ({
  image,
  title,
  price,
  id,
}) => {
  //////////////////discaount func////////////////////////////
  const words = title.split(" ");
  const truncatedText = words.slice(0, 10).join(" ");
  function applyDiscount(originalPrice: any) {
    const discountPercentage = 24;
    const discountAmount = (discountPercentage / 100) * originalPrice;
    const discountedPrice = originalPrice - discountAmount;
    return discountedPrice;
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.card} group`}>
        {id == 2 && (
          <div className={styles.overlay}>
            <div className={styles.selectIcon}>
              <CartProduct />
            </div>
            <div className={styles.selectIcon}>
              <LikeProduct />
            </div>
          </div>
        )}
        {id == 0 && <div className={styles.HotCard}>HOT</div>}

        <div className={`${styles.hoverOvelay} group-hover:opacity-[96%]`}>
          <div className={styles.selectIcon}>
            <CartProduct />
          </div>
          <div className={styles.selectIcon}>
            <LikeProduct />
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt={title} />
        </div>

        <h2 className={styles.title}>
          {truncatedText}{" "}
          {words.length > 10 && <span className="text-sm">......</span>}
        </h2>
        <div className={styles.wraper}>
          <p className={styles.pricediscount}>
            ${applyDiscount(price).toFixed(2)}
          </p>{" "}
          <span className={styles.price}>{price}</span>
          <span className={styles.off}>% 24 off</span>
        </div>
      </div>
    </div>
  );
};
