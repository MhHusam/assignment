import React from "react";
import FeaturedProduct from "./FeaturedProduct/FeaturedProduct";
import { useSelector } from "react-redux";
import { ProductsState } from "../../../app/features/Product/productSlice";
import FeaturedProductSkeleton from "./FeaturedProduct/FeaturedProductSkeleton";
import productsMock from "../../../../public/MockTest/product.json";

const FeaturedProductsList = () => {
  const state: any = useSelector((state) => state);

  const { products }: { products: ProductsState } = state;

  return (
    <div className=" max-w-containerMax m-auto">
      {products.fetchStatus == "succeeded" ? (
        <div className=" flex md:flex-row flex-col gap-10 justify-between items-center py-20">
          {products.data.slice(0, 3).map((item, index) => {
            return (
              <div key={item.id}>
                <FeaturedProduct
                  rating={item.rating}
                  id={index}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" flex md:flex-row flex-col gap-10 justify-between items-center py-20 ">
          {productsMock.slice(0, 3).map((item) => {
            return (
              <div key={item.id}>
                <FeaturedProductSkeleton />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FeaturedProductsList;
