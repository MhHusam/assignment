import { useDispatch, useSelector } from "react-redux";
import {
  ProductsState,
  fetchAllProducts,
} from "../../../app/features/Product/productSlice";
import { useEffect } from "react";
import { ProductCard } from "./Product/ProductCard";
import styles from "./CateguryList.module.scss";
const CateguryList = () => {
  const apiUrl = "https://fakestoreapi.com/products";

  const state: any = useSelector((state) => state);

  const { products }: { products: ProductsState } = state;

  console.log(state);

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchAllProducts(apiUrl));
  }, [dispatch]);

  return (
    <div>
      <div className={styles.container}>
        {products.data.map((item, index) => {
          return (
            <ProductCard
              id={index}
              key={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CateguryList;
