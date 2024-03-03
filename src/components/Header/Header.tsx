import Navbar from "./Navbar/Navbar";
import styles from "./Header.module.scss";
import Cart from "../../assets/svgs/Cart";
import { Search } from "../../assets/svgs/Search";
import ProfileLogo from "../../assets/svgs/ProfileLogo";
import ArrowdownSvg from "../../assets/svgs/ArrowdownSvg";
import { useSelector } from "react-redux";
import { CartState } from "../../app/features/Cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const state: any = useSelector((state) => state);
  const navigate = useNavigate();
  const { cart }: { cart: CartState } = state;

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

          <div
            onClick={() => navigate("./cart")}
            className={styles.cartContainer}
          >
            <div className={styles.cartCountdev}>{cart.cartCount}</div>
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
