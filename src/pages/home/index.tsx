import Refound from "../../assets/svgs/Refound";
import Shipping from "../../assets/svgs/Shipping";
import Support from "../../assets/svgs/Support";
import Banner from "../../components/Home/Banner/Banner";
import Categories from "../../components/Home/Categories/Categories";
import FeaturedProductsList from "../../components/Home/FeaturedProductsList/FeaturedProductsList";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <Categories />
      {/* ///////////////////////////////////////////  SHOP NOW/////////////////////////////// */}
      <div className={styles.shopNow}>
        <div className={styles.containerBox}>
          <img className={styles.img} src="src/assets/images/shoes.png" />

          <div className={styles.head1}>
            Adidas Men Running <br /> Sneakers
          </div>
          <div className={styles.head2}>
            Performance and design. Taken right to the edge.
          </div>
          <div>
            <button className={styles.button}>SHOP NOW</button>
            <div className="h-[2.7px] bg-white w-[75px]"></div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////// Shipping/////////////////////////////// */}

      <ul className={styles.shipping}>
        <li>
          <div>
            <Shipping />
          </div>
          <p>FREE SHIPPING</p>
        </li>
        <li>
          <div>
            <Refound />
          </div>
          <p>100% REFUND</p>
        </li>
        <li>
          <div>
            <Support />
          </div>

          <p>SUPPORT 24/7</p>
        </li>
      </ul>
      {/* //////////////////////////////////  FEATURED PRODUCTS///////////////////////////////////// */}
      <div className={styles.featuredContainer}>
        <div className={styles.featured}>FEATURED PRODUCTS</div>
        <FeaturedProductsList />
      </div>

      {/* //////////////////////////////////  Search Field///////////////////////////////////// */}
      <div className={styles.searchContainer}>
        <div className={styles.inputContainer}>
          <input className={styles.input} placeholder="Search query..." />
        </div>
        <div className={styles.btnSearch}>Search</div>
      </div>
    </div>
  );
};

export default Home;
