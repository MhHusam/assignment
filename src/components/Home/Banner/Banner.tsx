import styles from "./Banner.module.scss";
import bannerImage from "../../../assets/images/Banner.png";
const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={bannerImage} alt="Banner" className={styles.image} />
        <h1 className={styles.text}>
          Super Flash Sale <br /> 50% Off
        </h1>
      </div>
    </div>
  );
};

export default Banner;
