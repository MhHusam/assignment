import styles from "./FeaturedProduct.module.scss";
import { ProductShap } from "../../../../app/features/Product/productSlice";
import { renderRatingStars } from "../../../../utils/utils";

const FeaturedProduct: React.FC<ProductShap> = ({
  image,
  title,
  price,
  rating,
}) => {
  const rate = rating.rate;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={image} alt={title} />
        </div>

        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.rate}> {renderRatingStars(rate)}</div> 
          <div className={styles.wraper}>
            <span className={styles.off}>${price}</span>
            <p className={styles.price}>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
