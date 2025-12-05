import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selectors: Store => Data

  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    // Backend server data request => Data
    const result = [
      {
        _id: "690af4e7dd7a6d3699c4c6fb",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "shashlik",
        productPrice: 12,
        productLeftCount: 6,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "test",
        productImages: [
          "uploads/products/8f757e24-1c1e-4b5d-953d-16b2fc860709.jpg",
        ],
        productViews: 0,
        createdAt: "2025-11-05T06:55:35.656Z",
        updatedAt: "2025-12-01T17:43:42.172Z",
        __v: 0,
      },
      {
        _id: "6909f5e03df07b19a5a11d83",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "qd",
        productPrice: 12,
        productLeftCount: 123,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "svd",
        productImages: [
          "uploads/products/6a4edd7e-d59d-4dd7-89c9-404ae4dc4f1d.jpeg",
        ],
        productViews: 0,
        createdAt: "2025-11-04T12:47:28.466Z",
        updatedAt: "2025-11-04T12:47:28.466Z",
        __v: 0,
      },
    ];
    // Slice: Data => Store
    //@ts-ignore
    setPopularDishes(result);
  }, []);

  // console.log("popularDishes:", popularDishes);

  return (
    <div className="homepage">
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
