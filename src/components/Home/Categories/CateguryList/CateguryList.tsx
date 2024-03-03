import { useDispatch, useSelector } from "react-redux";
import {
  ProductsState,
  fetchAllProducts,
} from "../../../../app/features/Product/productSlice";
import { useEffect } from "react";
import { ProductCard } from "./Product/ProductCard";
import styles from "./CateguryList.module.scss";
import { ProductSkeleton } from "./Product/ProductSkeleton";
import productsMock from "../../../../../public/MockTest/product.json";

const CateguryList = () => {
  const apiUrl = "https://fakestoreapi.com/products";

  const state: any = useSelector((state) => state);

  const { products }: { products: ProductsState } = state;

  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchAllProducts(apiUrl));
  }, [dispatch]);

  return (
    <div className="pt-20 pb-44">
      {products.fetchStatus == "succeeded" && (
        <div className={styles.container}>
          {products.data.map((item, index) => (
            <ProductCard
              product={item}
              id={index}
              key={item.id}
              rate={item.rate}
              image={item.image}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      )}{" "}
      {products.fetchStatus == "pending" && (
        <div className={styles.container}>
          {productsMock.map((item) => (
            <div key={item.id}>
              <ProductSkeleton />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CateguryList;
