import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleCart } from "../../app/features/Cart/cartSlice";
import { ProductsState } from "../../app/features/Product/productSlice";
import productsMock from "../../../public/MockTest/product.json";
import styles from "./Checkout.module.scss";
import Paysection from "./Paysection";

const Checkout = () => {
  const apiUrl = "https://fakestoreapi.com/carts/5";

  const state: any = useSelector((state) => state);

  const { products }: { products: ProductsState } = state;
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchSingleCart(apiUrl));
  }, [dispatch]);

  return (
    <div className=" max-w-containerMax  m-auto">
      <ul className="grid  grid-cols-5 place-items-start   mt-10 ">
        <li className="col-span-2 font-medium text-[20px]">PRODUCT</li>
        <li className="font-medium  text-[20px]">PRICE</li>
        <li className="font-medium  text-[20px]">QTY</li>
        <li className="font-medium  text-[20px]">UNIT PRICE</li>
      </ul>
      <div className={styles.line}></div>
      <ul>
        {state.cart.cartProducts.map((cartItem: any) => {
          const productInData = products.data.filter(
            (product: any) => product.id == cartItem.productId
          );

          if (productInData.length > 0) {
            return (
              <div key={cartItem.productId}>
                {productInData.map((item) => {
                  return (
                    <div className={styles.CartItemsContainer}>
                      <li className={styles.li1}>
                        <div className={styles.removeIcon}>
                          <div className={styles.icon}>x</div>
                        </div>
                        <div className={styles.imgContainer}>
                          <img
                            className={styles.img}
                            src={item.image}
                            alt={"img"}
                          />
                        </div>
                        <div className={styles.title}>{item.title}</div>
                      </li>
                      <li>${item.price}</li>
                      <li>
                        <div className={styles.quantity}>
                          <span className={styles.icon}>+</span>
                          <span>{cartItem.quantity}</span>
                          <span className={styles.icon}>-</span>
                        </div>
                      </li>
                      <li>${item.price}</li>
                    </div>
                  );
                })}
                <div className={styles.line}></div>
              </div>
            );
          } else {
            const productInDataMock = productsMock.filter(
              (product: any) => product.id == cartItem.productId
            );
            if (productInDataMock) {
              return (
                <div key={cartItem.productId}>
                  {productInDataMock.map((item) => {
                    return (
                      <div className={styles.CartItemsContainer}>
                        <li className={styles.li1}>
                          <div className={styles.removeIcon}>
                            <div className={styles.icon}>x</div>
                          </div>
                          <div className={styles.imgContainer}>
                            <img
                              className={styles.img}
                              src={item.image}
                              alt={"img"}
                            />
                          </div>
                          <div className={styles.title}>{item.title}</div>
                        </li>
                        <li>${item.price}</li>
                        <li>
                          <div className={styles.quantity}>
                            <span className={styles.icon}>+</span>
                            <span>{cartItem.quantity}</span>
                            <span className={styles.icon}>-</span>
                          </div>
                        </li>
                        <li>${item.price}</li>
                      </div>
                    );
                  })}
                  <div className={styles.line}></div>
                </div>
              );
            }
          }
        })}
      </ul>
      {/* //////////////////////////////////  Pay ///////////////////////////////////// */}
      <Paysection />
    </div>
  );
};

export default Checkout;
